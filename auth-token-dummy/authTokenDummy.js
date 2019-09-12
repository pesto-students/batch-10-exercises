const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');

const secretKey = '2019abc';
const app = express();
const port = 8000;
const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);
const userObj = {
  username: '',
  password: '',
};

app.use(bodyParser.json());

function authHeader(req, res, next) {
  if (req.path === '/') {
    const authValue = req.header('Authorization');
    if (authValue !== 'undefined') {
      const bearer = authValue.split(' ');
      const token = bearer[1];
      const decoded = jwt.verify(token, secretKey);
      if (decoded.username !== userObj.username) {
        res.send('Invalid token');
      } else if (bcrypt.compareSync(decoded.password, userObj.password)) {
        next();
      } else {
        res.send(`Wrong password for ${userObj}`);
      }
    } else {
      res.send('Not authenticated');
    }
  } else if (req.path === '/signup' && req.method === 'POST') {
    const user = req.body;
    if (typeof user.username !== undefined) {
      if (user.username && user.password) {
        userObj.username = user.username;
        userObj.password = bcrypt.hashSync(user.password, salt);
        next();
      } else {
        res.send({ error: 'Missing password.' });
      }
    } else {
      res.send({ error: `Missing username and/or password. Given object ${user}` });
    }
  } else {
    next();
  }
}

app.use(authHeader);

app.get('/', (req, res) => {
  res.status(500).send({ data: ['The godfather', 'despicable me', 'inception', 'intersteller'] });
});

app.post('/signup', (req, res) => {
  const user = req.body;
  const token = jwt.sign(user, secretKey);
  res.send({
    token,
  });
});

app.listen(port);
