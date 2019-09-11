const fetch = require('node-fetch');

const BASE_URL = 'http://localhost:3000';

const fetchURL = async (url) => {
  const response = await fetch(url);
  return response;
};

it('BASE_URL', () => {
  test('Responds with status code:200', async () => {
    const response = await fetch(BASE_URL);
    const status = await response.status;
    expect(status).toBe(200);
  });
  test('Responds with text `Hey, I am server response`', async () => {
    const response = await fetch(BASE_URL);
    const text = await response.text();
    expect(text).toBe('Hey, I am server response');
  });
});

it('/movie/:movieName', async () => {
  let movieNames = ['godfather', 'pacific rim', 'titanic', 'a&b'];
  //   //   for (movie in movieNames)
  const movie = 'godfather';
  const movieURL = `${BASE_URL}/movie/${movie}`;
  const response = await fetch(movieURL);
  const { status } = response;
  const text = response.text();
  const expectedText = `My favorite movie is ${movie}`;
  test('Responds with status code:200', async () => {
    expect(status).toBe(200);
  });
  test(`Responds with text ${expectedText}`, async () => {
    expect(text).toBe(`${expectedText}`);
  });
});
