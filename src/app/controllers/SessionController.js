import OAuth2 from '../lib/OAuth2';
import Token from '../schemas/Token';
import Token from '../schemas/Token';

class SessionController {
  async index(req, res) {
    const { code, state } = req.query;

    if (!code) {
      return res.status(400).json({ error: 'Code is required' });
    }

    const { userID } = JSON.parse(state);

    const { tokens } = await OAuth2.client.getToken(code);

    await Token.create({
      userID,
      refreshToken: tokens.refresh_token,
    });

    return res.send('<h1>Sincronização feita com sucesso 🥳</h1>');
  }
}

export default new SessionController();
