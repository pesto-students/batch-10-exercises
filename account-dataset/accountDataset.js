/* eslint-disable arrow-body-style */
import { bankBalances as accounts } from './dataset.json';

const toNearestCent = (amount) => parseFloat(amount.toFixed(2));
const sum = (a, b) => a + b;

function hundredThousandairs() {
  return accounts.filter((account) => account.amount > 100000);
}

function datasetWithRoundedDollar() {
  return accounts.map((account) => {
    const accountDataWithRoundedDollar = {
      ...account,
      rounded: Math.round(account.amount),
    };
    return accountDataWithRoundedDollar;
  });
}

function sumOfBankBalances() {
  const balances = accounts.map((account) => parseFloat(account.amount));
  const sumOfBalances = balances.reduce(sum, 0);
  return toNearestCent(sumOfBalances);
}

function sumOfInterests() {
  const interestRate = 18.9;
  const selectedStates = ['WI', 'IL', 'WY', 'OH', 'GA', 'DE'];
  const selectedAccounts = accounts.filter((account) => selectedStates.includes(account.state));
  const applyInterest = (amount) => {
    const interest = amount * (interestRate / 100);
    return toNearestCent(interest);
  };
  const balancesWithInterest = selectedAccounts.map((account) => {
    const amount = parseFloat(account.amount);
    return applyInterest(amount, interestRate);
  });
  const sumOfBalances = balancesWithInterest.reduce(sum, 0);
  return toNearestCent(sumOfBalances);
}

function higherStateSums() {
  const totalBalanceMinimumThreshold = 1000000;
  const states = accounts.reduce((statesData, account) => {
    if (!statesData.includes(account.state)) {
      statesData.push(account.state);
    }
    return statesData;
  }, []);
  const stateWiseAccounts = states.map((state) => {
    return accounts.filter((account) => account.state === state);
  });
  const stateWiseAccountsSum = stateWiseAccounts.map((stateAccounts) => {
    const stateBalances = stateAccounts.map((account) => parseFloat(account.amount));
    return stateBalances.reduce(sum, 0);
  });
  const higherStateWiseSum = stateWiseAccountsSum.filter((totalBalanceInState) => {
    return totalBalanceInState > totalBalanceMinimumThreshold;
  });
  return toNearestCent(higherStateWiseSum.reduce(sum, 0));
}

export {
  hundredThousandairs,
  datasetWithRoundedDollar,
  sumOfBankBalances,
  sumOfInterests,
  higherStateSums,
};
