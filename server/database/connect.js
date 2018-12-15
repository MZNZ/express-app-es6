import config from '../config/env';
import mongoose from 'mongoose';

export default async function connectToDb(env) {
  mongoose.Promise = global.Promise;
  const dbUrl = config[env].dbUrl;

  try {
    await mongoose.connect(dbUrl, { useNewUrlParser: true });
    console.log('Connecting Database...');
  }
  catch (err) {
    console.log('Connect to MongoDB failed', err)
  }
}