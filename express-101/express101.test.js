const fetch = require('node-fetch');

const apiURL = 'http://localhost:3000';

describe('app', () => {
  test('should be listenin @ port 3000', async () => {
    const response = await fetch(apiURL, {
      method: 'GET', 'content-type': 'text/html',
    }).then(res => res);
    expect(response.status).toBe(200);
  });
  test('should be not return anything @ GET /', async () => {
    const response = await fetch(apiURL, {method: 'GET'}).then((res) => res.text());
    const expected = 'Hey, I am server response';
    expect(response).toBe(expected);
  });
  describe('GET /movie/:title', () => {
    const movieURL = `${apiURL}/movie/`;
    test('should not throw 404', async () => {
      const response = await fetch(`${movieURL}/someovie`, {
        method: 'GET',
      }).then(res => res.text());
      expect(response.status).not.toBe(404);
    });
    test('should throw 404', async () => {
        const response = await fetch(`${movieURL}/`, {
          method: 'GET',
        }).then(res => res);
        expect(response.status).toBe(404);
      });
  });
});
