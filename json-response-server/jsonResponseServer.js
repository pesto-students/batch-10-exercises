const express = require('express');

const jsonResponseServer = express();

jsonResponseServer.get('/', (req, response) => {
  response.status(200).send({ data: 'Pesto Bootcamp!' });
});

export {
  jsonResponseServer,
};
