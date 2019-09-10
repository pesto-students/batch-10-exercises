const fs = require('fs');
const path = require('path');

function filteredNames(pathname, type) {
  const outFiles = [];
  fs.readdirSync(pathname).forEach((file) => {
    if (path.extname(file) === `.${type}`) {
      outFiles.push(file);
    }
  });
  return outFiles;
}

export {
  filteredNames,
};
