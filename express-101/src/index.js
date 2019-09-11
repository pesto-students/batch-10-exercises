const express = require('express');

const app = express();

const PORT = 3000;

// 1) Create Routes
app.get('/', (req, res) => {
    res.status(200);
    res.send('Hey, I am server response');
  });

app.get('/movies/:title?', (req, res) => {
res.status(200);

const { title } = req.params;
res.send(`My favorite movie is ${title}`);
});  


// 2) Start server on port 3000

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;
