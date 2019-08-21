function diffArray(arrayOne, arrayTwo) {
  const uniqueItems = [
    ...arrayOne.filter((element) => !arrayTwo.includes(element)),
    ...arrayTwo.filter((element) => !arrayOne.includes(element)),
  ];
  return uniqueItems;
}

export {
  diffArray,
};
