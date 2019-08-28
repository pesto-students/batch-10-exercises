
const ConsumableUsers = {
  [Symbol.iterator]() {
    let i = 0;
    const arr = ['user: Alice', 'user: Bob'];
    return {
      next() {
        if (i < arr.length) {
          return {
            // eslint-disable-next-line no-plusplus
            value: arr[i++],
            done: false,
          };
        }
        return {
          value: undefined,
          done: true,
        };
      },
    };
  },
};

export {
  ConsumableUsers,
};
