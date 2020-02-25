import OAuth2 from '../lib/OAuth2';
import Token from '../schemas/Token';
import Token from '../schemas/Token';

class SessionController {
  async index(req, res) {
    try {
      const { code, state } = req.query;

      if (!code) {
        return res.status(400).json({ error: 'Code is required' });
      }

      const { userID } = JSON.parse(state);

      const { tokens } = await OAuth2.client.getToken(code);

      const checkTokenExist = await Token.findOne({ where: { userID } });

      if (checkTokenExist) {
        throw new Error();
      }

      await Token.create({
        userID,
        refreshToken: tokens.refresh_token,
      });

      return res.send('<h1>Your calendar was sync with success 🥳</h1>');
    } catch (e) {
      console.log(e);
      return res.send('<h1>Error on sync your calendar 😢</h1>');
    }
  }
}

export default new SessionController();
