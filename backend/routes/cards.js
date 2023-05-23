const router = require('express').Router();
const { celebrate } = require('celebrate');
const {
  getCards, createCard, deleteCard, putLike, deleteLike,
} = require('../controllers/cards');
const { cardDataValidationObject, cardIdValidationObject } = require('./validationRules');

router.get('/', getCards);
router.post('/', celebrate(cardDataValidationObject), createCard);
router.delete('/:_id', celebrate(cardIdValidationObject), deleteCard);
router.put('/:_id/likes', celebrate(cardIdValidationObject), putLike);
router.delete('/:_id/likes', celebrate(cardIdValidationObject), deleteLike);

module.exports = router;
