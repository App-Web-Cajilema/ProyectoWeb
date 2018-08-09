
import * as Joi from 'joi';

export const USUARIO_SCHEMA = Joi.object()
  .keys({
    id: Joi
      .number()
      .positive(),
    username: Joi
      .string()
      .alphanum()
      .min(1)
      .max(20)
      .required(),
    contrasenia: Joi
      .string()
      .alphanum()
      .token()
      .min(8)
      .max(15)
      .required(),
    nombre: Joi
      .string()
      .min(1)
      .max(20)
      .required(),
    apellido: Joi
      .string()
      .min(1)
      .max(20)
      .required(),
    correo: Joi
      .string()
      .email()
      .required(),
    imagen: Joi
      .string(),
    extension: Joi
      .required(),
  });
