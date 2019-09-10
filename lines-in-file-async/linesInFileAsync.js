const fs = require('fs');

const FileTextHelper = {
  linesInFileAsync : async function(pathtofile , encoding = 'utf8'){
    const fileData = fs.readFileSync(pathtofile , encoding);
    const numberOfLines = fileData.split('\n');
    return numberOfLines.length;
  }
}

export {
  FileTextHelper,
};
