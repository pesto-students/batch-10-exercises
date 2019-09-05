
function binaryAgent(binaryString) {
  if(typeof binaryString !== "string"){
    throw `String was excepted but ${typeof binaryAgent} was supplied `;
  }
  return binaryString.split(" ").map( function( binaryStringBlock ) {
    return String.fromCharCode( parseInt( binaryStringBlock, 2) );
  }).join("")
}

export {
  binaryAgent,
};
