import path from 'path';
import fs from 'fs-extra';
import { ConnectionOptions, createConnection, Connection } from 'typeorm';

export const getConnection = async (): Promise<ConnectionOptions> => {
  const config: ConnectionOptions = await fs.readJson(
    path.join(process.cwd(), '/ormconfig.json')
  );
  // const env = process.env.NODE_ENV ? process.env.NODE_ENV : 'default';
  // const config = configs.find(config => config.name === env);

  if (!config) {
    throw Error('Connection Not Found');
  }
  return { ...config };
};

export const connect = async (): Promise<Connection> => {
  const config: ConnectionOptions = await getConnection();
  return await createConnection({
    ...config,
    entities: [__dirname + '/entity/**/*.ts'],
    migrations: [__dirname + '/migration/**/*.ts'],
    subscribers: [__dirname + '/subscriber/**/*.ts']
  });
};
