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
                  amount: 50
                },
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
            name: "CRACRA",
            expenses: [
                
            ]
        }
    ],
};

const roundArrayCorrectly = (array) => {

    Array.prototype.sum = function (prop) {
        let total = 0
        for ( let i = 0, _len = this.length; i < _len; i++ ) {
            total = parseInt((total+this[i][prop])*100)/100
        }
        return total
    }

    const arrayWithFloatProblemWithIndex = array
        .map((o, i) => ({...o, index:i}))

    // We separate "good float numbers" (15.50) and "bad float numbes" (26.66666666...)
    let goodFloatNumbersArray = arrayWithFloatProblemWithIndex.filter(o => !((o.balance*100)%1))
    let badFloatNumbersArray = arrayWithFloatProblemWithIndex.filter(o => (o.balance*100)%1)

    // We separate bad float in two arrays
    let badFloatNumbersRoundedAlterArray = [];
    // let badFloatNumbersRestArray = [];

    const roundFloorSign = (number) => (Math.sign(number) >= 1 ? Math.floor(number*100)/100 : Math.ceil(number*100)/100);
    const roundCeilSign = (number) => (Math.sign(number) >= 1 ? Math.ceil(number*100)/100 : Math.floor(number*100)/100);
    const roundRound = (number) => (Math.round(number*100)/100);

    // -- methode math floor 
        badFloatNumbersRoundedAlterArray = [];
        for (let index = 0; index < badFloatNumbersArray.length; index++) {
            badFloatNumbersRoundedAlterArray.push({...badFloatNumbersArray[index], balance:roundFloorSign(badFloatNumbersArray[index].balance)})
        }

        if(!badFloatNumbersRoundedAlterArray.sum('balance')) {
        console.log('    // -- methode math floor ', [
            ...badFloatNumbersRoundedAlterArray, 
            ...goodFloatNumbersArray
        ]
            .sort((a, b) => a.index - b.index))

            return [
                ...badFloatNumbersRoundedAlterArray, 
                ...goodFloatNumbersArray
            ]
                .sort((a, b) => a.index - b.index) ;
        }

    // -- methode math ceil 
        badFloatNumbersRoundedAlterArray = [];
        for (let index = 0; index < badFloatNumbersArray.length; index++) {
            badFloatNumbersRoundedAlterArray.push({...badFloatNumbersArray[index], balance:roundCeilSign(badFloatNumbersArray[index].balance)})
        }

        if(!badFloatNumbersRoundedAlterArray.sum('balance')) {
            return [
                ...badFloatNumbersRoundedAlterArray, 
                ...goodFloatNumbersArray
            ]
                .sort((a, b) => a.index - b.index) ;
        }

    // -- methode math round 
        badFloatNumbersRoundedAlterArray = [];
        for (let index = 0; index < badFloatNumbersArray.length; index++) {
            badFloatNumbersRoundedAlterArray.push({...badFloatNumbersArray[index], balance:roundRound(badFloatNumbersArray[index].balance)})
        }

        console.log(badFloatNumbersRoundedAlterArray)

        if(!badFloatNumbersRoundedAlterArray.sum('balance')) {
            return [
                ...badFloatNumbersRoundedAlterArray, 
                ...goodFloatNumbersArray
            ]
                .sort((a, b) => a.index - b.index) ;
        }

    // -- methode parsmiddle array
        for (let index = 0; index < badFloatNumbersArray.length; index++) {
            if(!(index%2)) {
                
                if(Math.sign(badFloatNumbersArray[index].balance) === 1) {
                    badFloatNumbersRoundedAlterArray.push({...badFloatNumbersArray[index], balance:Math.ceil(badFloatNumbersArray[index].balance*100)/100})
                } else {
                    badFloatNumbersRoundedAlterArray.push({...badFloatNumbersArray[index], balance:Math.floor(badFloatNumbersArray[index].balance*100)/100})
                }
            } else {
                if(Math.sign(badFloatNumbersArray[index].balance) === -1) {
                    badFloatNumbersRoundedAlterArray.push({...badFloatNumbersArray[index], balance:Math.ceil(badFloatNumbersArray[index].balance*100)/100})
                } else {
                    badFloatNumbersRoundedAlterArray.push({...badFloatNumbersArray[index], balance:Math.floor(badFloatNumbersArray[index].balance*100)/100})
                }
            }
        }

        return [
            ...badFloatNumbersRoundedAlterArray, 
            ...goodFloatNumbersArray
        ]
            .sort((a, b) => a.index - b.index) ;

}


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
  
    let _fiendsWithBalance = friends.map((friend) => ({
      ...friend,
      balance: (equalBalance / nbUser) - friend.amount
    }));

    const fiendsWithBalance = roundArrayCorrectly(_fiendsWithBalance);

    fiendsWithBalance.forEach((friend) => {

        if (friend.balance) {

            for (let index = fiendsWithBalance.length - 1; friend.balance; index--) {
            
                    let currentUser = fiendsWithBalance[index];
                
                    if (currentUser.balance) {

                        if (friend.balance > Math.abs(currentUser.balance)) {
                            const currentTransaction = currentUser.balance;
                            friend.balance = Math.round((friend.balance+currentTransaction)*100)/100;
                            currentUser.balance = Math.round((currentUser.balance-currentTransaction)*100)/100;
                            transactions.push(`${friend.name} donne ${(currentTransaction-currentTransaction-currentTransaction)}€ a ${currentUser.name}`);
                        }  
                        
                        if (friend.balance <= Math.abs(currentUser.balance)) {
                            const currentTransaction = friend.balance;
                            friend.balance = Math.round((friend.balance-currentTransaction)*100)/100;
                            currentUser.balance = Math.round((currentUser.balance+currentTransaction)*100)/100;
                            transactions.push(`${friend.name} donne ${currentTransaction}€ a ${currentUser.name}`);
                        } 
                    }
                }
            }
        });
    
    return transactions;
}

console.log(getDivision(initialState.users))

