
function validFilename(fileName) {
   const reservedNames = ['CON', 'PRN', 'AUX', 'NUL', 'COM1', 'COM2', 'COM3', 'COM4', 'COM5', 
                           'COM6', 'COM7', 'COM8', 'COM9', 'LPT1', 'LPT2', 'LPT3', 'LPT4', 'LPT5', 
                           'LPT6', 'LPT7', 'LPT8', 'LPT9'];

    const disallowedSpecialChar = new RegExp('[\\:*?"<>|\/]','g');

    const matchDots = fileName.match(/[.]g/) || [];
    const specialChar = fileName.match(disallowedSpecialChar) || []; 

   if(reservedNames.indexOf( fileName ) != -1){
     return false;
   } 

   if(specialChar.length > 0 ){
     return false;
   }

   if(fileName.length > 255 || fileName.length =='' ){
     return(false);
   }
 

   if(matchDots.length < 3 ){
     if(fileName == '.' || fileName =='..'){
       return false;
     }
   }
   
   return true;
}

export {
  validFilename,
};
