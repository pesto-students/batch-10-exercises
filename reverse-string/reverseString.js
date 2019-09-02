function reverseString(str) {
  const reverseArray = function(arr) {
    const result = [];
    for (let i = arr.length - 1; i >= 0; i -= 1) {
      result.push(arr[i]);
    }
    return result;
  };
  return reverseArray(str.split('')).join('');
}

export { reverseString };
