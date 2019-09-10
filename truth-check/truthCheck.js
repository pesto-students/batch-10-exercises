
function truthCheck(array) {
  const result = array.every((element)=>{
    if(!checkTruthy(element)){
      return false;
    }
    return true;
  })
  return result;

}
const checkTruthy = (object1)=>{
  for (let [key, value] of Object.entries(object1)) {
    if(!value){
      return false;
    }
  }
  return true;
}
export {
  truthCheck,
};
