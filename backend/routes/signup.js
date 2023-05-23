const router = require('express').Router();
const { Joi, celebrate } = require('celebrate');
const { createUser } = require('../controllers/users');

const userDataValidationObject = {
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30),
    about: Joi.string().min(2).max(30),
    avatar: Joi.string().regex(/^https?:\/\/(www\.)?[0-9a-zA-Z-._~:/?#[\]@!$&'()*+,;=]+#?/),
    email: Joi.string().required().email(),
    password: Joi.string().required().min(8),
  }),
};

router.post('/', celebrate(userDataValidationObject), createUser);

module.exports = router;
