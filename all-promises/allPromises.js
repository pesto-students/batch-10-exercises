function allPromises(args = []) {
  const results = [];
  args.forEach(arg => {
    Promise.resolve(arg).then(result => results.push(result));
  });
  return Promise.resolve(results);
}

export { allPromises };
