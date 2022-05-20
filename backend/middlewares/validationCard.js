const { celebrate, Joi } = require('celebrate');
const validator = require('validator');

const validateRegisterCard = celebrate({
  body: {
    name: Joi.string().min(2).max(30),
    link: Joi.string().custom((value, helpers) => {
      if (validator.isURL(value)) {
        return value;
      }
      return helpers.message('Не корректно введен URL!');
    }),
  },
});

module.exports = validateRegisterCard;
