function alternatingCharacters(strings) {
  var result = [];
  strings.forEach( (str) => {
    let count = 0;
    for(let i = 1 ;i < str.length ; ++i) {
      if(str[i-1] == str[i]){
        count++;
      }
    }
    result.push(count);
  });

  return result;
}

export {
  alternatingCharacters,
};
