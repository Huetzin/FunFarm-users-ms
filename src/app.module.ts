import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import appConfig from './config/app.config';
import psqlConfig from './config/psql.config';
import { Configuration } from './config/config.keys';
import { validationAppSchema } from './config/validation.schema';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [appConfig, psqlConfig],
      validationSchema: validationAppSchema,
    }),
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
