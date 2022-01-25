export const API_URL = 'https://jsonplaceholder.typicode.com';

/**
 * Serviço que consome a api
 * @param {*} body
 * @returns
 */
export function USER_GET(body) {
  return {
    uri: API_URL + '/users',
    options: {
      method: 'GET',
    },
  };
}
