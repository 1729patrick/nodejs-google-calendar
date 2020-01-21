import mongoose from 'mongoose';
import '../bootstrap';
class Database {
  constructor() {
    this.mongo();
  }

  mongo() {
    console.log(process.env.MONGO_URL);
    this.mongoConnection = mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useFindAndModify: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
  }
}

export default new Database();
