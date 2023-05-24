require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const { errors } = require('celebrate');
const usersRouter = require('./routes/users');
const cardsRouter = require('./routes/cards');
const signupRouter = require('./routes/signup');
const signinRouter = require('./routes/signin');
const auth = require('./middlewares/auth');
const handleErrors = require('./middlewares/handleErrors');
const corsHandler = require('./middlewares/corsHandler');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const { NotFoundError } = require('./errors/NotFoundError');
const rateLimit = require('express-rate-limit');

const { PORT = 3000 } = process.env;

const app = express();

mongoose.connect('mongodb://0.0.0.0:27017/mestodb');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
});

app.use(limiter);

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(requestLogger);
app.use(corsHandler);

app.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сервер сейчас упадёт');
  }, 0);
});

app.use('/signup', signupRouter);
app.use('/signin', signinRouter);

app.use(auth);

app.use('/users', usersRouter);
app.use('/cards', cardsRouter);

app.use(errorLogger);

app.use(errors());

app.use((req, res, next) => {
  next(new NotFoundError('Endpoint does not exist'));
});

app.use(handleErrors);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
