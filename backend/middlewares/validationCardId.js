const { celebrate, Joi } = require('celebrate');

const validationCardId = celebrate({
  params: {
    id: Joi.string().length(24).hex().required(),
  },
});

module.exports = validationCardId;
