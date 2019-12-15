import 'reflect-metadata';
import { createConnection } from 'typeorm';
import express from 'express';

const main = async () => {
  // create typeorm connection
  await createConnection();

  // instantiate express app
  const app = express();

  // start app listen on port 4000
  app.listen(4000, () => {
    console.log('Express server ready on port 4000');
  });
};

main();
