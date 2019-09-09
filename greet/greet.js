
function greet( string ) {
  return new Promise(( resolve ,  reject )=>{
    resolve( 'Hey ' + string );
  });
}

export {
  greet,
};
