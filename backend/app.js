require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { errors } = require('celebrate');
const routesUser = require('./routes/users');
const routerCard = require('./routes/cards');
const { NotFoundErr } = require('./errors');
const auth = require('./middlewares/auth');
const { requestLogger, errorLogger } = require('./middlewares/logger');

const { PORT = 3000 } = process.env;

const app = express();
app.use(cors());

app.use(express.json());

app.use(requestLogger);

app.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сервер сейчас упадёт');
  }, 0);
});

app.use(routesUser);

app.use(routerCard);

app.use(auth);

app.use((req, res, next) => {
  next(new NotFoundErr('Не корректный URL'));
});

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
});

app.use(errorLogger);

app.use(errors());
// здесь обрабатываем все ошибки
app.use((err, req, res, next) => {
//  console.log(err);
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Ошибка на стороне сервера';
  res.status(statusCode).send({ message });
  //  res.status(500).send({ message: 'На сервере произошла ошибка' });

  next();
});

app.listen(PORT);
