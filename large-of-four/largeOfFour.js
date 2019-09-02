function largeOfFour(inputArrays) {
  const arrayOfLargestNumbers = inputArrays.map(array =>
    Math.max.apply(null, array)
  );
  return arrayOfLargestNumbers;
}

export { largeOfFour };
