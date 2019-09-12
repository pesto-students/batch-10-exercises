
function arrayCubeRootToJson(array) {
    if(foundError(array)){
      throw new Error('Invalid list. It must contain only numbers ');
    }
    let resultobj = {};
     array.forEach((number) => {
       resultobj[number] =  checkAndCuberoot( number );
      
    });
  return resultobj;
}

const checkAndCuberoot = ( number )=>{

  const matchExpectNumber = new RegExp('[^1-9-]','g');
  const matches = String(number).match(matchExpectNumber) || [];
  if(matches.length > 0){
    return number;
  } 

  const root =  Math.cbrt( number );
  return root;
}

const foundError = (data)=>{
  for( let i = 0; i < data.length ; i++){
    
    let number = Number(data[i]);
    if( 
      ( !number 
        || number === null 
        || number == false
      )
      &&(
        number !== 0
      )  ){
      return true;
    }

    if(isNaN(number)){
      return true;
    }
  }
  return false;
}
export {
  arrayCubeRootToJson,
};
