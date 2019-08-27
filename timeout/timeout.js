
function timeout(name) {
  return Promise.resolve(setTimeout(() => `Hello ${name}`, 300));
}
export {
  timeout,
};
