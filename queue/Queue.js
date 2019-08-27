
class Queue {
  constructor() {
    this.linkedList = [];
  }

  isEmpty() {
    return this.linkedList.length === 0;
  }

  enqueue(value) {
    this.linkedList.push(value);
  }

  dequeue() {
    return this.isEmpty() ? null : this.linkedList.shift();
  }

  peek() {
    return this.isEmpty() ? null : this.linkedList[0];
  }

  toString(stringifier = (element) => element) {
    const joinElements = (string, element) => `${string},${element}`;
    return this.linkedList.map(stringifier).reduce(joinElements);
  }
}

export {
  Queue,
};
