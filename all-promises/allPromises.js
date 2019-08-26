
function allPromises(promises = []) {
  const result = [];
  promises.forEach((promise) => {
    Promise
      .resolve(promise)
      .then((value) => result.push(value));
  });
  return Promise.resolve(result);
}

export {
  allPromises,
};
