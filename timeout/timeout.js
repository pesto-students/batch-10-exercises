
function timeout(name) {
  return new Promise(function ( resolve , reject){
    setTimeout(function(){ resolve(`Hello ${name}`)}, 300);
  })
    
}

export {
  timeout,
};
