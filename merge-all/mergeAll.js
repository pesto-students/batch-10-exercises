
function mergeAll(args) {
  const object = {};
  args.forEach((obj) => {
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        object[key] = obj[key];
      }
    }
  });
  return object;
}

export {
  mergeAll,
};
