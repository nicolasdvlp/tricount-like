const initialState = {
  displayModalExp: false,
  displayModal: false,
  displayModalDelUser: false,
  switchResultPage: false,
  formInput: {
    inputModal: "d",
    inputModalExp: "",
    inputModalExpNum: 0,
    currentUserExpID: 0,
    currentUserExpName: ""
  },
  users: [
    {
      id: 2,
      name: "Gontran",
      expenses: [
        {
          id: 433278,
          label: "couche",
          amount: 100000
        }
      ]
    },
    {
      id: 3,
      name: "Popop",
      expenses: [
        {
          id: 47578,
          label: "couche",
          amount: 50
        }
      ]
    },
    {
      id: 4,
      name: "Picsou",
      expenses: [
        {
          id: 47338,
          label: "pain",
          amount: 50
        }
      ]
    }
  ],
};

function precise_round(num, decimals) {
  var t = Math.pow(10, decimals);
  return +(Math.round((num * t) + (decimals > 0 ? 1 : 0) * (Math.sign(num) * (10 / Math.pow(100, decimals)))) / t).toFixed(decimals);
}

function testIt(x, y, transactionArray) {
  if (Math.abs(x.balance) > Math.abs(y.balance)) {
    // console.log('🍟🍟🍟')
    const currentTransaction = y.balance; // -32.2
    // console.log('🍟   ' + currentTransaction)
    x.balance = precise_round((x.balance + currentTransaction), 2);
    y.balance = precise_round((y.balance - currentTransaction), 2);
    transactionArray.push(`${x.name} donne ${(currentTransaction)}€ a ${y.name}`);
    // console.log(`${x.name} donne ${(currentTransaction)}€ a ${y.name} et il lui reste ${x.balance}`);
  }
  if (Math.abs(x.balance) <= Math.abs(y.balance)) {
    // console.log('🍕🍕🍕')
    const currentTransaction = x.balance;  // -30.8
    // console.log('🍕   ' + currentTransaction)
    x.balance = precise_round((x.balance - currentTransaction), 2);
    y.balance = precise_round((y.balance + currentTransaction), 2);
    transactionArray.push(`${x.name} donne ${currentTransaction}€ a ${y.name}`);
    // console.log(`${x.name} donne ${currentTransaction}€ a ${y.name} et il lui reste ${x.balance}`);
  }
}

const getDivision = (friends) => {

  let transactions = [],
    equalBalance = 0;
  const nbUser = friends.length;


  friends = friends
    .map((user) => {
      let amount = user.expenses.length ? user.expenses.reduce((dollarbillyo, { amount }) => dollarbillyo - amount, 0) : 0
      equalBalance += amount

      return { id: user.id, name: user.name, amount }
    })
    .sort((a, b) => b.amount - a.amount)
    .map((friend) => ({
      ...friend,
      balance: precise_round(- friend.amount + (equalBalance / nbUser), 2)
    }));

  console.log(friends)
  friends.forEach((friend) => {

    for (let index = friends.length - 1; index >= 0; index--) {
      let currentUser = friends[index];

      if (!friend.balance) break
      if (friend.id === currentUser.id || !currentUser.balance) continue;

      testIt(friend, currentUser, transactions)
    }
  });
  console.log(friends)
  return transactions;
}
console.log('🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪')
const result = getDivision(initialState.users)
console.log('🔥' + result)
