function reject(checkFunction, arr) {
  return arr.filter(el => !checkFunction(el));
}

export { reject };
