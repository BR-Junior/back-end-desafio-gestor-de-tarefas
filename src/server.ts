import type from 'express';
import cors from 'cors';
import { router } from './routes';
import 'dotenv/config';


const server = type();

server.use(cors());

server.use(type.json());

server.use(router);

export { server };