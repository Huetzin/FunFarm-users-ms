export interface AppEnvVars {
  NODE_ENV: string;
  APP_PORT: number;
  PG_HOST: string;
  PG_PORT: number;
  PG_USERNAME: string;
  PG_PASSWORD: string;
  PG_DATABASE: string;
  PG_SSL: string;
}

export enum Configuration {
  NODE_ENV = 'NODE_ENV',
  APP_PORT = 'APP_PORT',
  PG_PORT = 'PG_PORT',
  PG_USERNAME = 'PG_USERNAME',
  PG_PASSWORD = 'PG_PASSWORD',
  PG_DATABASE = 'PG_DATABASE',
  PG_SSL = 'PG_SSL',
}
