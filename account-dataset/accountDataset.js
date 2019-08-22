import dataset from './dataset.json';

function accountDataset(...args) {
  return args;
}

function hundredThousandairs() {
  return dataset.bankBalances.filter((data) => parseFloat(data.amount) > 100000);
}
function datasetWithRoundedDollar() {
  const accountList = dataset.bankBalances;
  for (const account of accountList) {
    account.rounded = Math.round(account.amount);
  }
  return accountList;
}
export {
  accountDataset,
  hundredThousandairs,
  datasetWithRoundedDollar,
};
