const reject = function(...args) {
  return [...args][1].filter(e => ![...args][0](e));
};
export { reject };
