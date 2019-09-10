const express = require('express');

const httpServer = express();

httpServer.get('/', (req, res) => res.send('Pesto Bootcamp!\n'));


export {
  httpServer,
};
