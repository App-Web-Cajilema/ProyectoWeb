
import * as Joi from 'joi';

export const TARJETA_SCHEMA = Joi.object()
  .keys({
    id: Joi
      .number(),
    tipo: Joi
      .string()
      .required(),
    numero: Joi
      .string()
      .creditCard()
      .required(),
    codigo: Joi
      .number()
      .integer()
      .required(),
    mes: Joi
      .number()
      .integer()
      .required(),
    anio: Joi
      .number()
      .integer()
      .required(),
  });
