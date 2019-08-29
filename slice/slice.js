
function slice(start, end, string) {
  return Array.prototype.slice.call(string, start, end);
}

export {
  slice,
};
