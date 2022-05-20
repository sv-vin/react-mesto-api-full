const { celebrate, Joi } = require('celebrate');

const validationUserId = celebrate({
  params: {
    id: Joi.string().length(24).hex().required(),
  },
});

module.exports = validationUserId;
