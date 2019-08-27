
function ackermann(inputs) {
  const isZero = (number) => number === 0;
  const { m, n } = inputs;
  if (isZero(m)) {
    return n + 1;
  }
  if (isZero(n)) {
    return ackermann({ m: m - 1, n: 1 });
  }
  return ackermann({ m: m - 1, n: ackermann({ m, n: n - 1 }) });
}

export {
  ackermann,
};
