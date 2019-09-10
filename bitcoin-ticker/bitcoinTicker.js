const http = require('http');

const api = 'https://api.coinmarketcap.com/v2/ticker/';

const header = new Headers({ 'content-type': 'application/json' });

function bitcoinTicker({ limit }) {
  http.get(`${api}/${limit}`, {
    headers: header
  }, (response) => {
    console.log(response);
    return response;
  });
}

export {
  bitcoinTicker,
};
