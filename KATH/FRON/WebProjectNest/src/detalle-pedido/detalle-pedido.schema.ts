
import * as Joi from 'joi';

export const DETALLE_SCHEMA = Joi.object()
  .keys({
    cantidad: Joi
      .number()
      .integer()
      .positive()
      .required(),
    cabecera: Joi
      .number()
      .integer()
      .positive()
      .required(),
    libro: Joi
      .number()
      .integer()
      .positive()
      .required(),
  });
