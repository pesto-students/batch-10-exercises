const express = require('express');

const app = express();

const api = 'https://api.coinmarketcap.com/v2/ticker';

// const header = { 'Content-type': 'application/json' };

function bitcoinTicker({ limit }) {
  app.get(`${api}?limit=${limit}`, (req, res) => {
    res.status(200).send(res.json());
  });
  // https.request(`${api}?limit=10`, (res) => {
  //   console.log('statusCode:', res.statusCode);
  //   // console.log('headers:', res.headers);

  //   res.on('data', (d) => {
  //     console.log(d);
  //   });
  // });
}

// const dummy = async () => {

//   const response = await bitcoinTicker({ limit: 10 });
//   console.log(response);
// }
// dummy();

export {
  bitcoinTicker,
};
