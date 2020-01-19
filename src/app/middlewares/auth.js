import jwt from 'jsonwebtoken';
import { promisify } from 'util';

import OAuth2 from '../lib/OAuth2';
import User from '../schemas/User';

import authConfig from '../../config/auth';

export default async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ error: 'Token not provided' });
  }

  const [_, token] = authorization.split(' ');

  try {
    const { userId } = await promisify(jwt.verify)(token, authConfig.secret);

    const user = await User.findOne({ userId });

    if (!user) {
      return res.status(401).json({ error: 'User not found' });
    }

    OAuth2.setCredentials(user.refreshToken);

    return next();
  } catch (e) {
    console.log(e);
    return res.status(401).json({ error: 'Token invalid' });
  }
};
