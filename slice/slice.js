function slice(...args) {
  const [lowerLimit, upperLimit, array] = [...args];
  return array.slice(lowerLimit, upperLimit);
}

export { slice };
