import type from 'express';
import cors from 'cors';
import { router } from './routes';
import 'dotenv/config';
import swaggerUi from 'swagger-ui-express';
import swaggerDocs from './swagger.json';


const server = type();

server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

server.use(cors());

server.use(type.json());

server.use(router);

export { server };