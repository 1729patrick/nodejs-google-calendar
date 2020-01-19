import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  userID: {
    type: String,
    required: true,
    unique: true,
  },
  refreshToken: {
    type: String,
    required: true,
    unique: true,
  },
});

export default mongoose.model('User', UserSchema);
