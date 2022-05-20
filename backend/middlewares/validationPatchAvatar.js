const { celebrate, Joi } = require('celebrate');
const validator = require('validator');

const validationPatchAvatar = celebrate({
  body: {
    avatar: Joi.string().required().custom((value) => {
      if (!validator.isURL(value, { require_protocol: true })) {
        throw new Error('Неправильный формат ссылки');
      }
      return value;
    }),
  },
});

// не могу понять как правильно описать эту валидацию (синтаксис) она не работает
module.exports = validationPatchAvatar;

/*
const validationPatchAvatar = celebrate({

  body: {

    avatar: Joi.string().required().custom((value, helpers) => {

      if (validator.isURL(value)) {

        return value;

      }

      return helpers.message('Не корректно введен URL!');

    }),

  },

});
*/
