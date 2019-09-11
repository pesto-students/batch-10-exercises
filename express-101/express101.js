const express = require('express');

const express101 = express();

const port = 3000;

express101.get('/', (req, res) => {
  res.send('Hey, I am server response');
});

express101.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});

export {
  express101,
};
