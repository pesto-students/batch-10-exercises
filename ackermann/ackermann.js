
function ackermann(args) {
  const { m, n } = args;
  if (m === 0) {
    return n + 1;
  }
  return ackermann({ m: m - 1, n: n === 0 ? 1 : ackermann({ m, n: n - 1 }) });
}

export {
  ackermann,
};
