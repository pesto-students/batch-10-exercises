
function counterFactory() {
  let incrementCount = 1;
  let decrementCount = -1;
  return {
    increment: function(){
      return incrementCount++;
    },
    decrement : function(){
      return decrementCount--;
    }
  }
}

export {
  counterFactory,
};
