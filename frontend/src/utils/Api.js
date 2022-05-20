class Api {
  constructor({ url, headers }) {
    this._url = url;
    this._headers = headers;
  }

  //Карточки
  getCard(token) {
    return fetch(`${this._url}/cards`, {
      method: "GET",
      headers: { 
        ...this._headers, 
        'Authorization': `Bearer ${token}`
      },
    }).then(this._checkAnswer);
  }

  //Профиль
  getPersonalInfo(token) {
    return fetch(`${this._url}/users/me`, {
      method: "GET",
      headers: { 
        ...this._headers, 
        'Authorization': `Bearer ${token}`
      },
    }).then(this._checkAnswer);
  }

  changeUserInfo({ name, about }, token) {
    // console.log(name);
    // console.log(about);
    return fetch(`${this._url}/users/me`, {
      method: "PATCH",
      headers: { 
        ...this._headers, 
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        name: name,
        about: about,
      }),
    }).then(this._checkAnswer);
  }

  addNewCard({ name, link }, token) {
    return fetch(`${this._url}/cards`, {
      method: "POST",
      headers: { 
        ...this._headers, 
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        name: name,
        link: link,
      }),
    }).then(this._checkAnswer);
  }

  removeCard(cardId, token) {
    return fetch(`${this._url}/cards/${cardId}`, {
      method: "DELETE",
      headers: { 
        ...this._headers, 
        'Authorization': `Bearer ${token}`
      },
    }).then(this._checkAnswer);
  }

  editAvatarUser(url, token) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: "PATCH",
      headers: { 
        ...this._headers, 
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        avatar: url,
      }),
    }).then(this._checkAnswer);
  }
  /*
  awaylikeCard(id) {
    return fetch(`${this._url}/cards/likes/${id}`, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._checkAnswer);
  }

  likeCard(id) {
    return fetch(`${this._url}/cards/likes/${id}`, {
      method: "PUT",
      headers: this._headers,
    }).then(this._checkAnswer);
  }
*/
  //Лайки
  changeLikeCardStatus(cardId, isLiked, token) {
    return fetch(`${this._url}/cards/${cardId}/likes/`, {
      method: isLiked ? "PUT" : "DELETE",
      headers: { 
        ...this._headers, 
        'Authorization': `Bearer ${token}`
      },
    }).then(this._checkAnswer);
  }

  _checkAnswer(res) {
    if (!res.ok) {
      return Promise.reject(`Ошибка ${res.status}`);
    }
    return res.json();
  }
}

//Сервер
const api = new Api({
  url: "https://api.domainname.sveta.nomoredomains.xyz",
  headers: {
    "Content-type": "application/json",
  },
});

export default api;
