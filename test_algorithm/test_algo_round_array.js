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
            id: 1,
            name: "Flagada",
            expenses: [
                {
                    id: 474,
                    label: "pain",
                    amount: 200
                },
                {
                    id: 45478,
                    label: "couche",
                    amount: 200
                }
            ]
        },
        {
            id: 2,
            name: "Gontran",
            expenses: [
                {
                    id: 47758,
                    label: "pain",
                    amount: 100
                },
                {
                    id: 433278,
                    label: "couche",
                    amount: 100
                }
            ]
        },
        {
            id: 3,
            name: "Popop",
          expenses: [
              {
                  id: 4718,
                  label: "pain",
                  amount: 150
                },
                {
                    id: 47578,
                    label: "couche",
                    amount: 150
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
                  amount: 300
                },
                {
                    id: 44878,
                    label: "couche",
                    amount: 300
                }
            ]
        },
        {
            id: 5,
            name: "Gripsou",
            expenses: [
                {
                    id: 47968,
                    label: "pain",
                    amount: 50
                },
                {
                    id: 4378,
                    label: "couche",
                    amount: 50
                }
            ]
        },
        {
            id: 6,
            name: "Gripsou",
            expenses: [
                
            ]
        }
    ],
};



//                               0     1     2      3     4 
const arrayWithFloatProblem = [854771.54/3, 854771.54/3, 15.50, 854771.54/3, 4.50];


// { id: 5, name: "Gripsou", expenses: [ 
//     { id: 47968, label: "pain", amount: 50 },
//     { id: 4378, label: "couche", amount: 50 }
//     ]
// },
// { id: 6, name: "Gripsou", expenses: [ ] }

const getDivision = (_friends) => { 
    
    const friends = _friends.map((user) => ({
            id: user.id,
            name: user.name,
            amount: user.expenses.length ? user.expenses.reduce((dollarbillyo, {amount}) => dollarbillyo + amount, 0) : 0,
        }))

    friends.sort((a, b) => a.amount - b.amount);
  
    let transactions = [];
    const nbUser = friends.length;
    let equalBalance = 0;
  
    for (let index = 0; index < friends.length; index++) {
      equalBalance = equalBalance + friends[index].amount;
    }
  
    let fiendsWithBalance = friends.map((friend) => ({
      ...friend,
      balance: (equalBalance / nbUser) - friend.amount
    }));
  
    console.log('fiendsWithBalance', fiendsWithBalance)


    fiendsWithBalance.forEach((friend) => {
      if (friend.balance) {
    
        for (let index = fiendsWithBalance.length - 1; friend.balance; index--) {
    
          let currentUser = fiendsWithBalance[index];
    
          if (currentUser.balance) {
            if (friend.balance > (currentUser.balance - currentUser.balance - currentUser.balance)) {
      
              const currentTransaction = currentUser.balance + 0;
              friend.balance += currentTransaction;
              currentUser.balance -= currentTransaction;
              transactions.push(`${friend.name} donne ${(currentTransaction-currentTransaction-currentTransaction)}€ a ${currentUser.name}`);
      
            } else if ((friend.balance <= (currentUser.balance - currentUser.balance - currentUser.balance))) {
  
              const currentTransaction = friend.balance + 0;
              friend.balance -= currentTransaction;
              currentUser.balance += currentTransaction;
              transactions.push(`${friend.name} donne ${currentTransaction}€ a ${currentUser.name}`);
      
            } else {
              console.log('nothing');
            }
          }
        }
      }
    });
    
    return transactions;
}

const myarrayint = [
{ id: 6, name: 'Gripsou', amount: 0, balance: 266.6666666666667 },      //  266.67      +       +       +       +
{ id: 5, name: 'Gripsou', amount: 100, balance: 166.66666666666669 },   //  166.67      -       -       -       +
{ id: 2, name: 'Gontran', amount: 200, balance: 66.66666666666669 },    //   66.67      +       +       -       +
{ id: 3, name: 'Popop', amount: 300, balance: -33.333333333333314 },    //  -33.33      -       +       -       +
{ id: 1, name: 'Flagada', amount: 400, balance: -133.33333333333331 },  // -133.33      +       -       -       +
{ id: 4, name: 'Picsou', amount: 600, balance: -333.3333333333333 }     // -333.33      -       +       +       +
]


const roundArrayCorrectly = (array) => {

    Array.prototype.sum = function (prop) {
        let total = 0
        for ( let i = 0, _len = this.length; i < _len; i++ ) {
            total += this[i][prop]
        }
        return total
    }

    const arrayWithFloatProblemWithIndex = array
        .map((o, i) => ({...o, index:i}))
        .sort((a,b) => Math.abs(b.balance)-Math.abs(a.balance));

        console.table(arrayWithFloatProblemWithIndex);

    // We separate "good float numbers" (15.50) and "bad float numbes" (26.66666666...)
    let badFloatNumbersArray = arrayWithFloatProblemWithIndex.filter(o => (o.balance*100)%1)
    let goodFloatNumbersArray = arrayWithFloatProblemWithIndex.filter(o => !((o.balance*100)%1))

    // We separate bad float in two arrays
    let badFloatNumbersHalfFloorArray = [];
    let badFloatNumbersRestArray = [];

    for (let index = 0; index < parseInt((badFloatNumbersArray.length/2)); index++) {
        badFloatNumbersHalfFloorArray.push(badFloatNumbersArray[index])
    }
    for (let index = parseInt((badFloatNumbersArray.length/(2))); index < badFloatNumbersArray.length; index++) {
        badFloatNumbersRestArray.push(badFloatNumbersArray[index])
    }


    const roudFloorArray = (array) => array.map(element => ({ ...element, balance: (Math.floor(element.balance*100)/100)}))
    const roundCeilArray = (array) => array.map(element => ({ ...element, balance: (Math.ceil(element.balance*100)/100)}))


    let addition = 0
    goodFloatNumbersArray.forEach(element => addition += element.balance);
    roudFloorArray(badFloatNumbersHalfFloorArray).forEach(element => addition += element.balance);
    console.log(roudFloorArray(badFloatNumbersHalfFloorArray));
    roundCeilArray(badFloatNumbersRestArray).forEach(element => addition += element.balance);
    console.log(roundCeilArray(badFloatNumbersRestArray))

    if (addition === arrayWithFloatProblemWithIndex.sum('balance')) {
        return [
            ...goodFloatNumbersArray, 
            ...roudFloorArray(badFloatNumbersHalfFloorArray), 
            ...roundCeilArray(badFloatNumbersRestArray)
        ]
            .sort((a, b) => a.index - b.index)
            .map(o => (o.balance));
    } 

    addition = 0
    goodFloatNumbersArray.forEach(element => addition += element.balance);
    roudFloorArray(badFloatNumbersRestArray).forEach(element => addition += element.balance);
    console.log(roudFloorArray(badFloatNumbersRestArray))
    roundCeilArray(badFloatNumbersHalfFloorArray).forEach(element => addition += element.balance);
    console.log(roundCeilArray(badFloatNumbersHalfFloorArray))

    if (addition === arrayWithFloatProblemWithIndex.sum('balance')) {
        return [
            ...goodFloatNumbersArray, 
            ...roudFloorArray(badFloatNumbersRestArray), 
            ...roundCeilArray(badFloatNumbersHalfFloorArray)
        ]
            .sort((a, b) => a.index - b.index)
            .map(o => (o.balance));
    } else {
        return ['error']
    }

}

console.log(roundArrayCorrectly(myarrayint));

// getDivision(initialState.users)