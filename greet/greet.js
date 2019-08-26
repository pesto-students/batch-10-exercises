function greet(entity) {
  const p = new Promise((resolve) => resolve(`Hey ${entity}`));

  return p.then((val) => val);
}

export { greet };
