const { celebrate, Joi } = require('celebrate');

const validateRegisterUser = celebrate({
  body: {
    name: Joi.string().min(2).max(30).required(),
    about: Joi.string().min(2).max(30).required(),
  },
});

module.exports = validateRegisterUser;
