
import * as Joi from 'joi';

export const LIBRO_SCHEMA = Joi.object()
  .keys({
    nombre: Joi
      .string()
      .min(1)
      .max(30)
      .required(),
    anio: Joi
      .number()
      .integer()
      .length(4)
      .required(),
    numeroPaginas: Joi
      .number()
      .integer()
      .greaterThan(0)
      .required(),
    descripcion: Joi
      .string()
      .alphanum()
      .min(1)
      .max(500)
      .required(),
    precio: Joi
      .number()
      .greaterThan(0)
      .required(),
  });
