
function types(input) {
  if (Array.isArray(element)) {
    return 'Array';
  } else if (element instanceof Object) {
    return 'Object';
  } else if (element instanceof RegExp) {
    return 'RegExp';
  } else if (element instanceof Function) {
    return 'Function';
  } 
}

export {
  types,
};
