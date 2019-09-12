
function values(objects) {
  let values = [];
  for( key in objects){
    values.push(objects[key]);
  }
  return values;
}

export {
  values,
};
