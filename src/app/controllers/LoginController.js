import oAuth2 from '../lib/OAuth2';

class LoginController {
  store(req, res) {
    const { userID } = req.params;

    const scope = ['https://www.googleapis.com/auth/calendar'];

    const url = oAuth2.client.generateAuthUrl({
      access_type: 'offline',
      scope,
      state: JSON.stringify({ userID }),
    });

    return res.redirect(url);
  }
}

export default new LoginController();
