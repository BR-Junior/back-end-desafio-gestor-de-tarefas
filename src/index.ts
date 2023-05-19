import { server } from './server';
import 'dotenv/config';
import { dataSource } from './dataSource';


const main = async () => {
  await dataSource.initialize();
  console.log('Banco de dados rodando');

  server.listen(process.env.PORT || 3333);
  console.log(`App rodando na porta ${process.env.PORT}`);
};

main();
