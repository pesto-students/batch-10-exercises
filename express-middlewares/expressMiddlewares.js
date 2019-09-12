const express = require('express');

const app = express();

function addHeader(req, res, next) {
  res.setHeader('middleware-header', req.path);
  console.log(`${req.path} ----- ${new Date()}`);
  next();
}

app.use(addHeader);

app.get('/', (req, res) => {
  res.send('Hello');
});

app.get('/languages', (req, res) => {
  res.send({
    data: ['JS', 'Go', 'Dart', 'Python', 'C']
  });
});
app.get('/packages', (req, res) => {
  res.send({
    data: ['helmet', 'bcryptJs', 'lodash', 'ckeditor', 'express']
  });
});

app.listen(3000);
