export const BASE_URL = 'https://cards.me.nomoredomains.monster';

const validateQuery = (res) => {
    if (res.ok) {
        return res.json()
    }
    return Promise.reject(`Ошибка: ${res.status}`);
}

export const register = (email, password) => {
    return fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email, password})
    })
        .then(response => validateQuery(response))
        .then((data) => data)
};
export const authorize = (email, password) => {
    return fetch(`${BASE_URL}/signin`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email, password})
    })
        .then(response => validateQuery(response))
        .then((data) => {
            if (data.token){
                localStorage.setItem('token', data.token);
                return data;
            }
        })
};
