import * as Joi from 'joi';

export const LOGIN_SCHEMA = Joi.object()
  .keys({
    username: Joi
      .string()
      .alphanum()
      .min(1)
      .max(15)
      .required(),
    contrasenia: Joi
      .string()
      .max(64)
      .required(),
  });
