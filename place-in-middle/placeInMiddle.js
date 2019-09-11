
function placeInMiddle(array1 , array2) {
   const array1Length = array1.length;
   if(array1Length == 0 || array1Length == 1 ){
     return [...array2 , ...array1];
   }

   const middlePos = Math.floor(array1Length / 2);
   for(let i = 0 ; i < array2.length ; i++){
      array1.splice(middlePos + i  , 0 , array2[i]); 
   }
   return  array1;
}

export {
  placeInMiddle,
};
