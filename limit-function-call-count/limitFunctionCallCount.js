
function limitFunctionCallCount(Fn , AllowedCall) {
  let callCounter = 1;
  return (...inputs) =>{
    if(callCounter <= AllowedCall){
      callCounter++;
      return Fn( ...inputs );
    }else{
      return null;
    }
  }
}

export {
  limitFunctionCallCount,
};
