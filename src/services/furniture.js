export const url = 'http://www.mocky.io/v2/5c9105cb330000112b649af8'

const headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
}

export const get = {
  method: 'GET',
  headers: headers
}

export function fetchFurnitures (callback) {
  return fetch(url, get)
    .then(response=> {
      response.json().then(json=> {
        callback(false, json);
      })
    }).catch(()=> callback(true, 'Internal Server Error'))
}
