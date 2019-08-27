
function sleep(timeout) {
  const sleepPromise = new Promise((resolve) => setTimeout(resolve, timeout));
  const sleepPromiseFunction = (value) => sleepPromise.then(() => value);
  sleepPromiseFunction.then = (value) => sleepPromise.then(value);
  return sleepPromiseFunction;
}

export {
  sleep,
};
