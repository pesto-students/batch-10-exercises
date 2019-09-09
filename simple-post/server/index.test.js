const fetch = require('node-fetch');

const BASE_URL = 'http://localhost:3001';

// const retrieveStatus = async url => {
//   const res = await fetch(url);
//   return res;
// };

// test('Responds with status code:200', () => {
//    expect(fetch(BASE_URL).then(res => res.status)).toBe(200)
// }

describe('BASE_URL', () => {
  test('Responds with status code:200', async () => {
    const response = await fetch(BASE_URL);
    const status = await response.status;
    expect(status).toBe(200);
  });
});
