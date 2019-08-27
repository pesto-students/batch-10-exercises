
function promiseAllProps(object) {
  const promiseToProps = {};
  Object.keys(object).forEach((key) => {
    object[key].then((value) => {
      promiseToProps[key] = value;
    });
  });
  return Promise.resolve(promiseToProps);
}

export {
  promiseAllProps,
};
