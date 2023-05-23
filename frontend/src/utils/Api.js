class Api {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl;
  }

  _setHeaders() {
    this._headers = {
      'Content-Type': 'application/json',
      'authorization': localStorage.getItem('token')
    }
  }

  _validateQuery(res) {
    if (res.ok) {
      return res.json()
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  _processGetQuery(additionalUrl) {
    this._setHeaders();
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
    this._setHeaders();
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
    this._setHeaders();
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
    this._setHeaders();
    return fetch(`${this._baseUrl}/cards/${cardId}`, {
      method: 'DELETE',
      headers: this._headers
    })
      .then(res => this._validateQuery(res))
  }

  toggleLike(isLiked, cardId) {
    this._setHeaders();
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
    this._setHeaders();
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
});

export default api;
