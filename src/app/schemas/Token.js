import mongoose from 'mongoose';

const TokenSchema = new mongoose.Schema({
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

export default mongoose.model('Token', TokenSchema);
