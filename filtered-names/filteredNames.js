import { file } from '@babel/types';

const fs = require('fs');
const path = require('path');

function filteredNames(...args) {
  const [rootDirectory, extension] = [...args];
  const files = fs.readdirSync(rootDirectory);

  console.log(
    files.every(el => fs.lstatSync(path.join(__dirname,el).isDirectory())
  );
}

export { filteredNames };
