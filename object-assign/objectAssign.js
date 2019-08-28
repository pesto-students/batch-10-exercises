function objectAssign(target, ...objects) {
  return objects.reduce((acc, obj) => ({ ...acc, ...obj }), target);
}

export { objectAssign };
