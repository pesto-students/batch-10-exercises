import dataset from './dataset.json';

function accountDataset(...args) {
  return args;
}

function hundredThousandairs() {
  return dataset.bankBalances.filter((data) => parseFloat(data.amount) > 100000);
}
export {
  accountDataset,
  hundredThousandairs,
};
