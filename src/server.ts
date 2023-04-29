import type from 'express';
import { router } from './routes';
import 'dotenv/config';


const server = type();

server.use(type.json());

server.use(router);

export { server };