const { celebrate, Joi } = require('celebrate');
const validator = require('validator');

const validateRegister = celebrate({
  body: {
    name: Joi.string().min(2).max(30),
    about: Joi.string().min(2).max(30),
    avatar: Joi.string().custom((value) => {
      if (!validator.isURL(value, { require_protocol: true })) {
        throw new Error('Неправильный формат ссылки');
      }
      return value;
    }),
    email: Joi.string().required().custom((value) => {
      if (!validator.isEmail(value, { require_protocol: true })) {
        throw new Error('Неправильный формат Email');
      }
      return value;
    }),
    password: Joi.string().required(),
  },
});

module.exports = validateRegister;
