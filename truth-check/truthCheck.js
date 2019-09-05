function truthCheck(arr, key) {
  return arr.every(el => el[key]);
}

export { truthCheck };
