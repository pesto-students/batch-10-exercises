import { isNumber } from 'util';

function rectangleDiagonal(...args) {
  if (args.length !== 2) {
    throw new Error(`Expected 2 arguments.Received ${args.length}`);
  }
  if (args.filter((value) => !isNumber(value)).length > 0) {
    throw new Error(`Expected numbers as arguments. Received ${typeof args[0]}`);
  }
  const [length, breadth] = args;
  return Math.sqrt((length ** 2) + (breadth ** 2));
}

export {
  rectangleDiagonal,
};
