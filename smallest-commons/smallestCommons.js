function smallestCommons(arr) {
  function range(start, end) {
    return Array(end - start + 1)
      .fill()
      .map((_, idx) => start + idx);
  }
  const gcd = (a, b) => (a ? gcd(b % a, a) : b);

  const lcm = (a, b) => (a * b) / gcd(a, b);
  arr.sort();
  return range(arr[0], arr[1]).reduce(lcm);
}

export { smallestCommons };
