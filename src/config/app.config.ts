import { registerAs } from '@nestjs/config';

export default registerAs('appConfig', () => {
  return {
    NODE_ENV: process.env.NODE_ENV,
    APP_PORT: process.env.APP_PORT,
  };
});
