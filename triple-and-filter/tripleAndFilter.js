
function tripleAndFilter(numbers) {
  //const MultipliedByThree = numbers.map(number => { return number * 3});
  const MultipleOfThree = numbers.filter(number =>{ 
    const MultipliedByThree = number * 3;
    if(MultipliedByThree % 5 == 0){
      return MultipliedByThree;
    } 
  })
  return MultipleOfThree;
}

export {
  tripleAndFilter,
};
