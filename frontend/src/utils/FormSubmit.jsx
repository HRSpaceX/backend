import {BASE_URL} from './constants.jsx'

function checkRes(res) {
  if (res.ok) {
    return res.json()
  }
  else {
    return Promise.reject(`Что-то пошло не так: ${res.status}`);
  }
}

export function submitForm({ data }) {

  return fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({data})
  })
    .then(checkRes)
}
