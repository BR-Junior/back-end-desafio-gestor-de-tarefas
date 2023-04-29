import 'dotenv/config';
import 'reflect-metadata';
import {DataSource} from 'typeorm';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const port = process.env.DB_PORT as number | undefined;

export const typeORMConfig = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: port,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: [`${__dirname}/**/database/*.{ts,js}`],
  migrations: [`${__dirname}/**/database/migrations/*.{ts,js}`]
});