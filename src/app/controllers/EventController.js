import { subYears } from 'date-fns';
class EventController {
  async index(req, res) {
    try {
      const events = await req.calendar.events.list({
        calendarId: 'primary',
        timeMin: subYears(new Date(), 1).toISOString(),
        singleEvents: true,
        orderBy: 'startTime',
      });

      return res.json(events.data.items);
    } catch (e) {
      return res.status(400).json({ error: e.message });
    }
  }

  async store(req, res) {
    try {
      const response = await req.calendar.events.insert({
        calendarId: 'primary',
        resource: req.body,
      });

      const event = response.data;

      return res.json({ event });
    } catch (e) {
      return res.status(400).json({ error: e.message });
    }
  }

  async delele(req, res) {
    try {
      const { eventId } = req.params;

      await req.calendar.events.delete({
        calendarId: 'primary',
        eventId,
      });

      return res.json({ event: 'Event deleted with success' });
    } catch (e) {
      return res.status(400).json({ error: e.message });
    }
  }

  async update(req, res) {
    try {
      const { eventId } = req.params;

      const response = await req.calendar.events.update({
        calendarId: 'primary',
        eventId,
        resource: req.body,
      });

      const event = response.data;

      return res.json({ event });
    } catch (e) {
      return res.status(400).json({ error: e.message });
    }
  }
}

export default new EventController();

//https://developers.google.com/calendar/v3/reference/events
