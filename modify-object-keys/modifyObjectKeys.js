
function modifyObjectKeys(obj , Fn) {
  let newObj = {};
  for(let [key , value ] of Object.entries(obj)){
    let newKey = Fn(key);
    newObj[ newKey ] = value;
  }
  return newObj;
}

export {
  modifyObjectKeys,
};
