import mongoose from 'mongoose';

export default async function connectToDb(dbUrl) {
  mongoose.Promise = global.Promise;

  try {
    await mongoose.connect(dbUrl, {
      useNewUrlParser: true,
      useCreateIndex: true,
    });
    console.log('Connecting Database...');
  }
  catch (err) {
    console.log('Connect to MongoDB failed', err)
  }
}