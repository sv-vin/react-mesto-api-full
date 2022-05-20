const Card = require('../models/card');
const { NotFoundErr, BadRequestErr, ForbiddenErr } = require('../errors');

const getCards = (req, res, next) => {
  Card.find({})
    .then((cards) => res.send({ data: cards }))
    .catch((err) => {
      next(err);
    });
};

const createCard = (req, res, next) => {
  const ownerId = req.user._id;
  const { name, link } = req.body;
  // записываем данные в базу
  Card.create({ name, link, owner: ownerId })
    // возвращаем записанные в базу данные карточки
    .then((card) => res.send({ data: card }))
    // если данные не записались, вернём ошибку
    .catch((err) => {
      if (err.name === 'ValidationError') {
        next(new BadRequestErr(`${Object.values(err.errors).map((error) => error.message).join(', ')}`));
      } else {
        next(err);
      }
    });
};

const deleteCard = (req, res, next) => {
  const { id } = req.params;
  Card.findById(id)
    .orFail(() => new NotFoundErr('Карточка по переданному id не найдена'))
    .then((card) => {
      if (!card.owner.equals(req.user._id)) {
        return next(new ForbiddenErr('Нельзя удалить чужую карточку'));
      }
      return card.remove()
        .then(() => res.send({ message: 'Карточка удалена' }));
    })
    .catch(next);
};

const likeCard = (req, res, next) => {
  const userId = req.user._id;
  const { id } = req.params;
  Card.findByIdAndUpdate(
    id,
    { $addToSet: { likes: userId } }, // добавить _id в массив, если его там нет
    { new: true },
  )
    .then((card) => {
      if (card) {
        res.send({ data: card });
      } else {
        throw new NotFoundErr('Карточка по переданному id не найден');
      }
    })
    .catch((err) => {
      next(err);
    });
};

const dislikeCard = (req, res, next) => {
  const userId = req.user._id;
  const { id } = req.params;
  Card.findByIdAndUpdate(
    id,
    { $pull: { likes: userId } }, // добавить _id в массив, если его там нет
    { new: true },
  )
    .then((card) => {
      if (card) {
        res.send({ data: card });
      } else {
        throw new NotFoundErr('Карточка по переданному id не найден');
      }
    })
    .catch((err) => {
      next(err);
    });
};

module.exports = {
  getCards,
  createCard,
  deleteCard,
  likeCard,
  dislikeCard,
};
