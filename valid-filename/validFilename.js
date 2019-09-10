
function validFilename(str) {
  const reg = new RegExp('/[\W| ]+/', 'g');
  console.log(str.match(reg));
  if (str.match(reg)) {
    return false;
  }
  return true;
}

export {
  validFilename,
};
