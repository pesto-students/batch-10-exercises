function allPromises(arrayOfPromises) {
  const isPromiseArray = Array.isArray(arrayOfPromises);
  const results = [];

  if (!isPromiseArray) {
    return Promise.resolve();
  }

  const merged = arrayOfPromises.reduce(
    (acc, promise) => acc.then(() => promise).then((out) => results.push(out)),
    Promise.resolve(null),
  );

  return merged.then(() => results);
}

export { allPromises };
