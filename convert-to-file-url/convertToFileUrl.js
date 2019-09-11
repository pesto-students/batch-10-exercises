const path = require('path');

function convertToFileUrl(filename) {
  return `file://${path.resolve(encodeURI(filename))}`;
}

export {
  convertToFileUrl,
};
