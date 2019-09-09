
const sleep = (timeOut) => {
  return new Promise(function ( resolve , reject){
    console.log(timeOut);
    setTimeout(function(){ resolve(null)}, timeOut);
  }) 
}

export {
  sleep,
};
