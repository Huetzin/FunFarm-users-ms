import { registerAs } from '@nestjs/config';

export default registerAs('pgDatabase', () => {
  return {
    type: 'postgres',
    host: process.env.PG_HOST,
    port: parseInt(process.env.PG_PORT),
    username: process.env.PG_USERNAME,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DATABASE,
    ssl: process.env.PG_SSL === 'true' ? { rejectUnauthorized: false } : false,
    entities: [__dirname + '/../../../src/**/*.entity{.ts,.js}'],
    migrations: [__dirname + '/../../dist/migrations/*{.ts,.js}'],
    autoLoadEntities: true,
    synchronize: false,
    migrationsRun: false,
    cli: {
      migrationsDir: [__dirname + '/src/migrations'],
    },
  };
});
