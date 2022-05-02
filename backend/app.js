require('dotenv').config();
const express = require('express');

const cors = require('cors');
const { errors } = require('celebrate');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routerErrorWay = require('./routes/errorsway');
const { createUser, login } = require('./controllers/users');
const auth = require('./middlewares/auth');
const errorHandler = require('./middlewares/errorHandler');
const { registerValid, loginValid } = require('./middlewares/validationJoi');
const { requestLogger, errorLoger } = require('./middlewares/logger');

// Слушаем 3000 порт
const { PORT = 3000 } = process.env;

const app = express();

app.use(requestLogger);
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сервер сейчас упадёт');
  }, 0);
});

app.post('/signup', registerValid, createUser);
app.post('/signin', loginValid, login);

// подключаемся к серверу mongo
mongoose.connect('mongodb://localhost:27017/mestodb', { useNewUrlParser: true });

app.use('/cards', require('./routes/cards'));

app.use(auth);

app.use(routerErrorWay);

app.use(errorLoger);

app.use(errors());

app.use(errorHandler);

app.listen(PORT);
