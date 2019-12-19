const getBalanceByCategoryAndDate = (
  transactions = [],
  category,
  start,
  end
) => {
  let balance = 0;

  if (transactions.length) {
    transactions.forEach(transaction => {
      if (transaction.category === category) {
        let date = new Date(transaction.time);
        if (date >= start && date <= end) {
          balance += transaction.amount;
        }
      }
    });
  }

  return balance;
};

const sampleTransactions = [
  {
    id: 123,
    sourceAccount: "my_account",
    targetAccount: "supermarket",
    amount: -14,
    category: "groceries",
    time: "2018-03-04"
  },
  {
    id: 125,
    sourceAccount: "my_account",
    targetAccount: "coffee_shop",
    amount: -30,
    category: "eating_out",
    time: "2018-03-12"
  },
  {
    id: 124,
    sourceAccount: "my_account",
    targetAccount: "supermarket",
    amount: -3,
    category: "groceries",
    time: "2018-03-15"
  },
  {
    id: 126,
    sourceAccount: "my_account",
    targetAccount: "cinema",
    amount: -12,
    category: "movies",
    time: "2018-05-15"
  }
];

console.log(
  getBalanceByCategoryAndDate(
    sampleTransactions,
    "groceries",
    new Date("2018-03-01"),
    new Date("2018-03-31")
  )
);
