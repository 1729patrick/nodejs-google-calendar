import OAuth2 from '../lib/OAuth2';
import Token from '../schemas/Token';

export default async (req, res, next) => {
  const { userid } = req.headers;

  if (!userid) {
    return res.status(401).json({ error: 'userID not provided' });
  }

  try {
    const user = await Token.findOne({ userID: userid });

    if (!user) {
      return res.status(401).json({ error: 'User not found' });
    }

    OAuth2.setCredentials(user.refreshToken);

    req.calendar = OAuth2.calendar();
    req.userID = userid;
    return next();
  } catch (e) {
    console.log(e);
    return res.status(401).json({ error: 'Token invalid' });
  }
};
