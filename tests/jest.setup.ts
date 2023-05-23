// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import supertest from 'supertest';
import { server } from '../src/server';
import { dataSource } from '../src/dataSource';
import 'reflect-metadata';


beforeAll(async () => {
  await dataSource.initialize();
});


export const testServer = supertest(server);