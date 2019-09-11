const express = require('express');

const app = express();

const pestoHeaderMiddleware = require('./middle-ware/pestoHeaderMiddleware');



app.use(pestoHeaderMiddleware);

app.get('/', (req, res) => {
 res.send('ok');
});

app.get('/languages', (req, res) => {
  const languages = ['JavaScript', 'Haskell', 'Python','Hindi','English'];
  res.json(languages);
});
app.get('/packages', (req, res) => {
  const packages = ['Express', 'Sails', 'Waterline','Sails-MySql','Jest'];
  res.json(packages);
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
