function orbitalPeriod(inputArr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  const getPow = num => pow => Math.pow(num, pow);
  const calculateOrbitalPeriod = a =>
    2 * Math.PI * getPow(getPow(a)(3) / GM)(0.5);
  return inputArr.map(el => {
    const a = earthRadius + el.avgAlt;
    delete el.avgAlt;
    el.orbitalPeriod = Math.round(calculateOrbitalPeriod(a));
    return el;
  });
}

export { orbitalPeriod };
