
function validFilename(str) {
  const reg = new RegExp('/[\W| ]+/', 'g');
  if (reg.test(str)) {
    return false;
  }
  return true;
}

export {
  validFilename,
};
