function findElement(arr, fn) {
  return arr.filter(el => fn(el))[0];
}

export { findElement };
