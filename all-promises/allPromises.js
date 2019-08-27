function allPromises(promises) {
  return new Promise((resolve, reject) => {
    const promiseValues = [];
    promises.forEach((promise, index) => {
      if (promise instanceof Promise) {
        promise.then(value => {
          promiseValues[index] = value;
        });
      } else {
        const garbageValue = promise;
        promiseValues[index] = garbageValue;
      }
    });
    resolve(promiseValues);
  });
}
export { allPromises };
