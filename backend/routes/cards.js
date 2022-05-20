const routerCard = require('express').Router();
const {
  getCards, createCard, deleteCard, likeCard, dislikeCard,
} = require('../controllers/cards');

const validateRegisterCard = require('../middlewares/validationCard');
const validationCardId = require('../middlewares/validationCardId');
const auth = require('../middlewares/auth');

routerCard.get('/cards', auth, getCards);

routerCard.post('/cards', auth, validateRegisterCard, createCard);

routerCard.delete('/cards/:id', auth, validationCardId, deleteCard);

routerCard.put('/cards/:id/likes', auth, validationCardId, likeCard);

routerCard.delete('/cards/:id/likes', auth, validationCardId, dislikeCard);

module.exports = routerCard;
