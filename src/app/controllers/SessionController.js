import jwt from 'jsonwebtoken';

import OAuth2 from '../lib/OAuth2';
import User from '../schemas/User';

import authConfig from '../../config/auth';

class SessionController {
  async store(req, res) {
    const { code, scope, state } = req.query;
    const { userID } = JSON.parse(state);

    const { tokens } = await OAuth2.client.getToken(code);

    await User.create({
      userID,
      refreshToken: tokens.refresh_token,
    });

    const { secret, expiresIn } = authConfig;
    const token = jwt.sign({ userID }, secret, { expiresIn });

    return res.json({ token });
  }
}

export default new SessionController();
