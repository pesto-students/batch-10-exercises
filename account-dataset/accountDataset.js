/* eslint no-param-reassign: 0 */
import data from './dataset.json';

function hundredThousandairs() {
  const { bankBalances } = data;
  const bankBalanceLength = bankBalances.length;
  const finalAccounts = [];
  let index = 0;

  while (index < bankBalanceLength) {
    const { amount: amountInString } = bankBalances[index];
    if (Number.parseFloat(amountInString) > 100000) {
      finalAccounts.push(bankBalances[index]);
    }
    index += 1;
  }
  return finalAccounts;
}

function datasetWithRoundedDollar() {
  const { bankBalances } = data;

  return bankBalances.map((account) => ({
    ...account,
    rounded: Math.round(account.amount),
  }));
}

function sumOfBankBalances() {
  const { bankBalances } = data;
  const amountSumFn = (total, account) => {
    const { amount } = account;
    return total + Number.parseFloat(amount);
  };
  const amount = bankBalances.reduce(amountSumFn, 0);
  return Number(amount.toFixed(2));
}

//   Wisconsin - WI
//   Illinois - IL
//   Wyoming - WY
//   Ohio - OH
//   Georgia - GA
//   Delaware - DE
function sumOfInterests() {
  const states = ['WI', 'IL', 'WY', 'OH', 'GA', 'DE'];
  const INTEREST = 0.189; // 18.9%
  const { bankBalances } = data;
  const unwantedStates = (account) => states.includes(account.state);
  const applyInterest = (account) => {
    const { amount } = account;
    const parsedAmount = Number.parseFloat(amount);
    return Number((parsedAmount * INTEREST).toFixed(2));
  };
  const calculateTotalInterest = (total, amount) => total + amount;
  const totalInterest = bankBalances
    .filter(unwantedStates)
    .map(applyInterest)
    .reduce(calculateTotalInterest, 0);

  return Number(totalInterest.toFixed(2));
}

function higherStateSums() {
  const AMOUNT_UPPER_LIMIT = 1000000;
  let totalAmount = 0;
  const { bankBalances } = data;

  const sumAllStateAmounts = (accumalator, account) => {
    if (accumalator[account.state]) {
      accumalator[account.state] += Number(account.amount);
    } else {
      accumalator[account.state] = Number(account.amount);
    }
    return accumalator;
  };

  const cumulativeAmountObject = bankBalances.reduce(sumAllStateAmounts, {});
  const amountEntries = Object.entries(cumulativeAmountObject);
  for (const [, amount] of amountEntries) {
    if (amount > AMOUNT_UPPER_LIMIT) {
      totalAmount += amount;
    }
  }

  return totalAmount;
}

export {
  hundredThousandairs,
  datasetWithRoundedDollar,
  sumOfBankBalances,
  sumOfInterests,
  higherStateSums,
};
