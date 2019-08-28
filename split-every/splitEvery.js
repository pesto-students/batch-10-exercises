function splitEvery(...args) {
  const [size, inputArray] = [...args];
  if (size <= 0) {
    throw new Error(
      `Received invalid input ${size}. Please enter a positive integer.`
    );
  }
  function* chunks(arr, n) {
    for (let i = 0; i < arr.length; i += n) {
      yield arr.slice(i, i + n);
    }
  }
  return [...chunks(inputArray, size)];
}
export { splitEvery };
