
function allPromises(...args) {
  return Promise.all(args)
    .then((values) => Promise.resolve(values));
}

export {
  allPromises,
};
