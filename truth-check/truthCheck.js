function truthCheck(arr, arg) {
  const isTruthy = function(val) {
    if (val) {
      return true;
    }
    return false;
  };

  if (arr.every(obj => arg in obj)) {
    return arr.every(obj => isTruthy(obj.arg));
  }
  return false;
}

export { truthCheck };
