function dropElements(arr, fn) {
  return arr.filter(el => fn(el));
}

export { dropElements };
