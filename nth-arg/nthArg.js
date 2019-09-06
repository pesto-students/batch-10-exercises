
function nthArg(index) {
  return (...args) => {
    const ArgsLength = args.length;
    if(index < 0 ){
      const key  = ArgsLength - index;
      return args[key];
    }else{
      return args[index];
    }
    
  };
}

export {
  nthArg,
};
