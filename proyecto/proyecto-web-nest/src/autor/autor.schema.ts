import * as Joi from 'joi';

export const AUTOR_SCHEMA = Joi.object()
  .keys({
    nombre: Joi
      .string()
      .min(1)
      .max(15)
      .required(),
    apellido: Joi
      .stirng()
      .min(1)
      .max(15)
      .required(),
  });