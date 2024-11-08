import * as Joi from 'joi';

export const validationAppSchema = Joi.object({
  NODE_ENV: Joi.string().valid('development', 'production', 'test').required(),
  APP_PORT: Joi.number().required(),
}).unknown(true);
