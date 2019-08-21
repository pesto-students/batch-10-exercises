
function binaryAgent(binaryString) {
  return binaryString.split(" ").map( function( binaryStringBlock ) {
    return String.fromCharCode( parseInt( binaryStringBlock, 2) );
  }).join("")
}

export {
  binaryAgent,
};
