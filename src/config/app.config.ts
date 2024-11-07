import { registerAs } from '@nestjs/config';

export default registerAs('appConfig', () => {
  return {
    appEnv: process.env.NODE_ENV,
    appHost: process.env.APP_HOST,
    appPort: process.env.APP_PORT,
    apiPrefix: process.env.API_PREFIX,
  };
});
