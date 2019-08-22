
function sumFibs(num) {

  var fibNum = {
    last: 1 ,
    current: 1
  };
  var sum = 1;

  while(fibNum.current <= num){
    
    if(fibNum.current % 2 != 0){
      sum += fibNum.current;
    }
    
    var tempNum = fibNum.current;
    fibNum.current += fibNum.last;
    fibNum.last = tempNum;
  }

  return sum;
}

export {
  sumFibs,
};
