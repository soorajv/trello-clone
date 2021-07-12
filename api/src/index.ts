import mongoose from 'mongoose';
import config from 'config';

import { app } from './app';

const start = async () => {
  try {
    const mongoURL: any = config.get('MONGO_URL');
    await mongoose.connect(mongoURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log('Connected to MongoDb');
  } catch (err) {
    console.error(err);
  }
  const port = config.get('PORT');
  app.listen(port, () => {
    console.log(`Server listening on port : ${port}`);
  });
};

start();
