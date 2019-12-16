import 'reflect-metadata';
import express from 'express';
import { buildSchema } from 'type-graphql';
import { ApolloServer } from 'apollo-server-express';
import cors from 'cors';

import { connect } from './db';

const main = async () => {
  const PORT = process.env.PORT || 4000;

  // connect to db
  await connect();

  // graphql schema
  const schema = await buildSchema({
    resolvers: [__dirname + '/modules/**/*.resolver.ts']
  });

  // instantiate apollo server
  const apolloServer = new ApolloServer({
    schema,
    context: ({ req, res }) => ({ req, res })
  });

  // instantiate express app
  const app = express();

  // middlewares
  app.use(cors({ credentials: true, origin: true }));

  // pass express app as middleware to apollo server
  apolloServer.applyMiddleware({ app, cors: false });

  // start app listen on port 4000
  app.listen(PORT, () => {
    console.log('Express server ready on port 4000');
  });
};

main();
