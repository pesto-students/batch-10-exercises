function greet(message) {
  return new Promise(function(resolve, reject ) {
    resolve(`Hey ${message}`);
  });
}

export { greet };
