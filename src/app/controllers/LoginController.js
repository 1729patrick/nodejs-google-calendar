import oAuth2 from '../lib/OAuth2';
import Token from '../schemas/Token';
class LoginController {
  async store(req, res) {
    await Token.create({
      userID: 'c@c.com',
      refreshToken:
        '1//03xAU5EQA86vSCgYIARAAGAMSNwF-L9IrTaJ6spqaK2KsLY1xAZHSCAptpN7nust3f3JUws4Ozhelnh2DTV-V4KiLACIG88zUCkU',
    });

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
