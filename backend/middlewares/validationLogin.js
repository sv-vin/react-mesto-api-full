const { celebrate, Joi } = require('celebrate');
const validator = require('validator');

const validateLogin = celebrate({
  body: {
    email: Joi.string().required().custom((value) => {
      if (!validator.isEmail(value, { require_protocol: true })) {
        throw new Error('Неправильный формат Email');
      }
      return value;
    }),
    password: Joi.string().required(),
  },
});

module.exports = validateLogin;
