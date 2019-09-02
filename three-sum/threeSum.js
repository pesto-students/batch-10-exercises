const threeSum = function(nums, target) {
  const result = [];
  const sanitizedNums = [...nums]
    .sort((a, b) => a - b)
    .filter(num => num !== 0);
  // if (nums.length < 3 || isNaN(target)) {
  //   throw;
  // }
  for (let i = 0; i <= sanitizedNums.length - 3; i += 1) {
    for (let j = i + 1; j <= sanitizedNums.length - 2; j += 1) {
      for (let k = j + 1; k <= sanitizedNums.length - 1; k += 1) {
        if (sanitizedNums[i] + sanitizedNums[j] + sanitizedNums[k] === target) {
          return [sanitizedNums[i], sanitizedNums[j], sanitizedNums[k]];
        }
      }
    }
  }
  return null;
};

export { threeSum };
