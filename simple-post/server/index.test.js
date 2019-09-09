const fetch = require('node-fetch');

const BASE_URL = 'http://localhost:3001';

describe('BASE_URL', () => {
  test('Responds with status code:200', async () => {
    const response = await fetch(BASE_URL);
    const status = await response.status;
    expect(status).toBe(200);
  });
  test("Responds with text `Hello. What's up?`", async () => {
    const response = await fetch(BASE_URL);
    const text = await response.text();
    expect(text).toBe("Hello. What's up?");
  });
});

describe('BASE_URL/posts/', () => {
  test('Responds with status code:403 if no password is sent', async () => {
    const response = await fetch(BASE_URL + '/posts');
    const status = await response.status;
    expect(status).toBe(403);
  });
  test('Responds with status code:403 if wrong password is sent', async () => {
    const response = await fetch(BASE_URL + '/posts', {
      headers: {
        'pesto-password': 'darth vade'
      }
    });
    const status = await response.status;
    expect(status).toBe(403);
  });
  test('Responds with status code:200 if right password is sent', async () => {
    const response = await fetch(BASE_URL + '/posts', {
      headers: {
        'pesto-password': 'darth vader'
      }
    });
    const status = await response.status;
    expect(status).toBe(200);
  });
  test('Responds with status code:403 if wrong header is sent for password', async () => {
    const response = await fetch(BASE_URL + '/posts', {
      headers: {
        'pesto-passwor': 'darth vader'
      }
    });
    const status = await response.status;
    expect(status).toBe(403);
  });
  test('Responds with message:`No pesto-password header present. Hint: password is `darth vader`` if authentication credentials are incorrect', async () => {
    const response = await fetch(BASE_URL + '/posts', {
      headers: {
        'pesto-passwor': 'darth vader'
      }
    });
    const json = await response.json();
    expect(json.error.message).toBe(
      'No pesto-password header present. Hint: password is `darth vader`'
    );
  });
});
