
import * as Joi from 'joi';

export const GENERO_SCHEMA = Joi.object()
  .keys({
    nombre: Joi
      .string()
      .min(1)
      .max(20)
      .required(),
  });
