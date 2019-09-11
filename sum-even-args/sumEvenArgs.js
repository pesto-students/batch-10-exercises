
function sumEvenArgs(...numbers) {
  const SumOfNumbers = numbers.reduce((sum , number) => { 
    if(number % 2 == 0){
      return sum + number;
    }else{
      return sum + 0;
    } 
  } , 0 )
  return SumOfNumbers;
}

export {
  sumEvenArgs,
};
