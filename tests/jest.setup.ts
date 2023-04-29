// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import supertest from 'supertest';
import { server } from '../src/server';
import { typeORMConfig } from '../src/typeORMConfig';

beforeAll(async () => {
  await typeORMConfig.initialize();
});


export const testServer = supertest(server);