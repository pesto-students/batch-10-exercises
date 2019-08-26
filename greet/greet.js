function greet(input) {
  const sayHey = str => {
    return `Hey ${str}`;
  };
  const p = new Promise((res, rej) => {
    res(sayHey(input));
  });
  return p;
}

export { greet };
