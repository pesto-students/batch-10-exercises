
function sumAll(numbers) {

  if(numbers.length != 2) {
    throw `Expected numbers should be of length 2. You entered $(numbers)`;
  }

  if(typeof numbers[0] != 'number' || typeof numbers[1] != 'number') { 
    throw `Both inputs should be a Number. You entered $( typeof numbers[0]) & $( typeof numbers[0]) `;
  }
 
  var min = Math.min(numbers[0], numbers[1]);
  var max = Math.max(numbers[0], numbers[1]);

  var sum = 0;
  for(let i=min; i<=max; ++i) {
    sum+=i;
  }

  return Number(sum);
}

export {
  sumAll,
};
