
function knownProp( collection ) {
  return new Proxy( collection , CollectionHandler );
}
const CollectionHandler = {
  get: function(target , key, value) {
    for(let keyInTarget in target){
      if(keyInTarget === key){
        return target[key];
      }
    }
    throw new TypeError('Unknown property');
  }
} 

export {
  knownProp,
};
