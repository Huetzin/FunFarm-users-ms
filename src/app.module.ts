import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import appConfig from './config/app.config';
import psqlConfig from './config/psql.config';
import { Configuration } from './config/config.keys';
import { validationAppSchema } from './config/validation.schema';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [appConfig, psqlConfig],
      validationSchema: validationAppSchema,
    }),
    TypeOrmModule.forRootAsync({
      useFactory: async (configService: ConfigService) => ({
        ...configService.get('pgDatabase'),
      }),
      imports: [ConfigModule],
      inject: [ConfigService],
    }),
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  static appEnv: string;
  static appPort: number;
  constructor(private readonly configService: ConfigService) {
    AppModule.appEnv = this.configService.get(Configuration.NODE_ENV);
    AppModule.appPort = this.configService.get(Configuration.APP_PORT);
  }
}
