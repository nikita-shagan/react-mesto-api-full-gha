const { Joi } = require('celebrate');

module.exports.cardDataValidationObject = {
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    link: Joi.string().required().regex(/^https?:\/\/(www\.)?[0-9a-zA-Z-._~:/?#[\]@!$&'()*+,;=]+#?/),
  }),
};

module.exports.cardIdValidationObject = {
  params: Joi.object().keys({
    _id: Joi.string().required().hex().length(24),
  }),
};

module.exports.userDataValidationObject = {
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    about: Joi.string().required().min(2).max(30),
  }),
};

module.exports.userAvatarValidationObject = {
  body: Joi.object().keys({
    avatar: Joi.string().required().regex(/^https?:\/\/(www\.)?[0-9a-zA-Z-._~:/?#[\]@!$&'()*+,;=]+#?/),
  }),
};

module.exports.userIdValidationObject = {
  params: Joi.object().keys({
    _id: Joi.string().required().hex().length(24),
  }),
};
