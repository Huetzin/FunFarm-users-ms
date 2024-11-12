import * as Joi from 'joi';

export const validationAppSchema = Joi.object({
  // *  app
  NODE_ENV: Joi.string().valid('development', 'production', 'test').required(),
  APP_PORT: Joi.number().required(),
  // *  pg database
  PG_HOST: Joi.string().required(),
  PG_PORT: Joi.string().required(),
  PG_USERNAME: Joi.string().required(),
  PG_PASSWORD: Joi.string().required(),
  PG_DATABASE: Joi.string().required(),
  PG_SSL: Joi.string().required(),
}).unknown(true);
