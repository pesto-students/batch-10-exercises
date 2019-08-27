function isIterable(maybeIterable) {
  return typeof maybeIterable[Symbol.iterator] === 'function';
}

export { isIterable };
