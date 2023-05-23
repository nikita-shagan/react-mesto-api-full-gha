const router = require('express').Router();
const { Joi, celebrate } = require('celebrate');
const { login } = require('../controllers/users');

const userDataValidationObject = {
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(8),
  }),
};

router.post('/', celebrate(userDataValidationObject), login);

module.exports = router;
