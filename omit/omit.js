
function omit(list , object) {
  let ResponseObject = {}; 
  for(let key in object){
      if(list.indexOf( key ) == -1){
        ResponseObject[ key ] = object[ key ];
      }
  }
  return ResponseObject;
}

export {
  omit,
};
