const accountsDataJSON = require('./dataset.json');

function accountDataset(...args) {
  return args;
}
const { bankBalances } = accountsDataJSON;

const sumValues = (accumulator, currentValue) => accumulator + currentValue;

function hundredThousandairs() {
  return bankBalances.filter(
    bankBalance => parseFloat(bankBalance.amount) > 100000
  );
}

function datasetWithRoundedDollar() {
  return bankBalances.map(bankBalance => ({
    ...bankBalance,
    rounded: Math.round(bankBalance.amount)
  }));
}

function sumOfBankBalances() {
  function money_round(amount, multiplier) {
    return Math.round(amount * multiplier) / multiplier;
  }

  const amounts = bankBalances.map(bankBalance =>
    parseFloat(bankBalance.amount)
  );
  const amountSum = amounts.reduce(sumValues);
  return money_round(amountSum, 100);
}
function higherStateSums() {
  const groupBy = key => array =>
    array.reduce((objectsByKeyValue, obj) => {
      const value = obj[key];
      objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj);
      return objectsByKeyValue;
    }, {});
  const accountsGroupedByState = groupBy('state')(bankBalances);
}

accountDataset();
export {
  accountDataset,
  hundredThousandairs,
  datasetWithRoundedDollar,
  sumOfBankBalances,
  higherStateSums
};
