class Cycled {
  constructor(fixture) {
    this.fixture = fixture;
    this.index = 0;
  }

  // eslint-disable-next-line
  [Symbol.iterator]() {
    return {
      next: () => {
        if (this.index >= this.fixture.length) {
          return { value: this.fixture[this.index], done: true };
        }
        return { value: this.fixture[this.index], done: false };
      },
    };
  }

  current() {
    return this[Symbol.iterator]().next().value;
  }

  next() {
    this.index += 1;
    return this[Symbol.iterator]().next().value;
  }

  previous() {
    this.index -= 1;
    return this[Symbol.iterator]().next().value;
  }

  step(offset) {
    this.index += offset;
    return this[Symbol.iterator]().next().value;
  }

  // reversed() {}

  // indexOf() {}
}

export { Cycled };
