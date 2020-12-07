const friends = [{
    name: "alex",
    account: 200
  },
  {
    name: "bruno",
    account: 100
  },
  {
    name: "julia",
    account: 50
  },
  { name: "loic",
    account: 300 },
  {
    name: "rene",
    account: 50
  }
];

((friends) => { 
  friends.sort((a, b) => a.account - b.account);

  let transactionNumber = 0;
  let transactions = [];
  const nbUser = friends.length;
  let equalBalance = 0;

  for (let index = 0; index < friends.length; index++) {
    equalBalance = equalBalance + friends[index].account;
  }

  let fiendsWithBalance = friends.map((friend) => ({
    ...friend,
    balance: (equalBalance / nbUser) - friend.account
  }));

  console.log(fiendsWithBalance);

  fiendsWithBalance.forEach((friend) => {
    if (friend.balance) {
  
      for (let index = fiendsWithBalance.length - 1; friend.balance; index--) {
  
        let currentUser = fiendsWithBalance[index];
  
        if (currentUser.balance) {
          if (friend.balance > (currentUser.balance - currentUser.balance - currentUser.balance)) {
    
            const currentTransaction = currentUser.balance + 0;
            friend.balance += currentTransaction;
            currentUser.balance -= currentTransaction;
            transactionNumber++;
            transactions.push(`${friend.name} donne ${currentTransaction} a ${currentUser.name}`);
    
          } else if ((friend.balance <= (currentUser.balance - currentUser.balance - currentUser.balance))) {

            const currentTransaction = friend.balance + 0;
            friend.balance -= currentTransaction;
            currentUser.balance += currentTransaction;
            transactionNumber++;
            transactions.push(`${friend.name} donne ${currentTransaction} a ${currentUser.name}`);
    
          } else {
            console.log('nothing');
          }
        }
      }
    }
  })
  return [transactions, transactionNumber];

})(friends);






// for each friend
