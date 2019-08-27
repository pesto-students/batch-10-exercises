function greet(message) {
  return new Promise(function(reject, resolve) {
    resolve(`Hey ${message}`);
  });
}

export { greet };
