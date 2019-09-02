function isTriangle(...args) {
  const vertices = [...args].sort();
  if (vertices[2] - vertices[1] > vertices[0]) {
    return false;
  }
  return true;
}

export { isTriangle };
