export interface AppEnvVars {
  NODE_ENV: string;
  APP_PORT: number;
}

export enum Configuration {
  NODE_ENV = 'NODE_ENV',
  APP_PORT = 'APP_PORT',
}
