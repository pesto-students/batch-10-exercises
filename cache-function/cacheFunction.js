
function cacheFunction(fn) {
  let CacheCheck = {};
  return ( input )=>{
    if(CacheCheck.hasOwnProperty( input )){
      return CacheCheck[ input ];
    }else{
      CacheCheck[ input ] = fn( input );
      return CacheCheck[ input ];
    }
  }
 }

export {
  cacheFunction,
};
