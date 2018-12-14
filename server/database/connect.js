import config from '../config';
// import Logger from '../utils/logger';
import mongoose from 'mongoose';

export default async function connectToDb(env) {
  mongoose.Promise = global.Promise;
  const dbUrl = config[env].dbUrl;

  try {
    await mongoose.connect(dbUrl, { useNewUrlParser: true });
    // Logger.info();
  }
  catch (err) {
    console.log('COULD NOT CONNECT TO DATABASE!!!', err);
    // loggers.error('Could not connect to MongoDB', err)
  }
}