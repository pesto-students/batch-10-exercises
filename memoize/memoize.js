
function memoize(Fn) {
  let FnMap = {};
  return (...input)=>{
    const key = Symbol(input);
    if(FnMap.hasOwnProperty( key )){
      return FnMap[key];
    }else{
      FnMap[ key ] = Fn( ...input );
      return FnMap[ key ]; 
    }
  };
}

export {
  memoize,
};
