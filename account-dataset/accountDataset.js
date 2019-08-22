function accountDataset(accountsData) {
  const accounts = accountData.bankBalances;
  hundredThousandairs (accounts){
    const newAccounts = accounts.filter(account => account.amount > 10000);
    return newAccounts;
  };
}
accountDataset();
export { accountDataset };
