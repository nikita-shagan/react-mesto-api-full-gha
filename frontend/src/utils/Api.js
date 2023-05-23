class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers
  }

  _validateQuery(res) {
    if (res.ok) {
      return res.json()
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  _processGetQuery(additionalUrl) {
    return fetch(`${this._baseUrl}${additionalUrl}`, {
      headers: this._headers
    })
      .then(res => this._validateQuery(res))
  }

  getUserInfo() {
    return this._processGetQuery('/users/me')
  }

  getInitialCards() {
    return this._processGetQuery('/cards')
  }

  updateUserInfo(data) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        about: data.about
      })
    })
      .then(res => this._validateQuery(res))
  }

  addCard(data) {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        link: data.link
      })
    })
      .then(res => this._validateQuery(res))
  }

  deleteCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}`, {
      method: 'DELETE',
      headers: this._headers
    })
      .then(res => this._validateQuery(res))
  }

  toggleLike(isLiked, cardId) {
    let method = 'PUT';
    if (isLiked) {
      method = 'DELETE'
    }
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method,
      headers: this._headers
    })
      .then(res => this._validateQuery(res))
  }

  changeAvatar(link) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: link
      })
    })
      .then(res => this._validateQuery(res))
  }
}

const api = new Api({
  baseUrl: 'https://cards.me.nomoredomains.monster',
  headers: {
    'Content-Type': 'application/json',
    'authorization': localStorage.getItem('token')
  }
});

export default api;
