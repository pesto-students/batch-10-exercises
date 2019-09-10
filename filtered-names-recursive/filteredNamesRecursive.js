const fs = require('fs');
const path = require('path');

function filteredNamesRecursive(...args) {
  const [directory, extension] = [...args];

  const walkSync = (dir, filelist = []) => {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
      if (fs.statSync(dir + '/' + file).isDirectory()) {
        filelist = walkSync(dir + '/' + file, filelist);
      } else {
        filelist.push(file);
      }
    });
    return filelist;
  };
  return walkSync(directory).filter(file => file.endsWith(extension));
}

export { filteredNamesRecursive };
