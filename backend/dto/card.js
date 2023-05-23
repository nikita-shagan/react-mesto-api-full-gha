const { getUserDto } = require('./user');

module.exports.getCardDto = (card) => ({
  _id: card._id,
  name: card.name,
  link: card.link,
  owner: getUserDto(card.owner),
  likes: card.likes.map((user) => getUserDto(user)),
  createdAt: card.createdAt,
});
