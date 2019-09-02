function steamrollArray(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (Array.isArray(arr[i])) {
      newArr = newArr.concat(steamrollArray(arr[i]));
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

export { steamrollArray };
