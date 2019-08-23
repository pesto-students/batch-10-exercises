
function counterFactory(...args) {
  var count = 0;
  return { 
    increment: () => { return ++count; }, 
    decrement: () => { return --count; }
  }
}

export {
  counterFactory,
};
