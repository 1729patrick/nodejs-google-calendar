const { google } = require('googleapis');
import googleConfig from '../../config/google';

class EventController {
  index(req, res) {
    const calendar = google.calendar({ version: 'v3', googleConfig });
    calendar.events.list(
      {
        calendarId: 'primary',
        timeMin: new Date().toISOString(),
        maxResults: 10,
        singleEvents: true,
        orderBy: 'startTime',
      },
      (err, response) => {
        if (err) return console.log('The API returned an error: ' + err);

        return res.json({ events: response.data.items });
      }
    );
  }

  store(req, res) {}

  delele(req, res) {}

  update(req, res) {}
}

export default new EventController();
