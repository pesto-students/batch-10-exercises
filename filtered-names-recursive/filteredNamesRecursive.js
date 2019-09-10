const fs = require('fs');
const path = require('path');

function filteredNamesRecursive(pathname, type) {
  const fileArr = [];
  const recursiveRead = (dir, filelist) => {
    const files = fs.readdirSync(dir);
    files.forEach((file) => {
      if (path.extname(file) === '') {
        filelist = recursiveRead(`${dir}/${file}/`, filelist);
      } else if (path.extname(file) === `.${type}`) {
        filelist.push(file);
      }
    });
    return filelist;
  };
  return recursiveRead(pathname, fileArr);
}

export {
  filteredNamesRecursive,
};
