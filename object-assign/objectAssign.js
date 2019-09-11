
function objectAssign(...arrayOfObjects) {
  let firstobj = arrayOfObjects.shift();

  arrayOfObjects.forEach(( item )=>{
    if(item){
      Object.assign(firstobj , item);
    }
  })
  return firstobj;
}

export {
  objectAssign,
};
