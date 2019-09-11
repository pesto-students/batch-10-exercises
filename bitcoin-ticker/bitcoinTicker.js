const fetch = require('node-fetch');

const api = 'https://api.coinmarketcap.com/v2/ticker';

async function bitcoinTicker({ limit }) {
  const data = await fetch(`${api}?limit=${limit}`, { method: 'GET' })
    .then((res) => res.json());
  return data;
}

export {
  bitcoinTicker,
};
