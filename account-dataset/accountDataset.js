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
function sumOfBankBalances() {
  const accountList = dataset.bankBalances;
  let sum = 0;
  for (const account of accountList) {
    sum += parseFloat(account.amount);
  }
  return parseFloat(sum.toFixed(2));
}
function sumOfInterests() {
}
export {
  accountDataset,
  hundredThousandairs,
  datasetWithRoundedDollar,
  sumOfBankBalances,
  sumOfInterests,
};
