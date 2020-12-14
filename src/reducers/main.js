import { DISPLAY_MODAL, DISPLAY_MODAL_EXP, ADD_USER, UPDATE_INPUT, ADD_EXPENSE, DEL_USER, DISPLAY_MODAL_DEL_USER, DEL_USERS } from '../actions/card'
import { SWITCH_VIEW } from '../actions/switchView'

const initialState = {
    displayModalExp: false,
    displayModal: false,
    displayModalDelUser: false,
    switchResultPage: false,
    formInput: {
        inputModal: "",
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
                    label: "fajitas",
                    amount: 200
                },
                {
                    id: 45478,
                    label: "burritos",
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
                    label: "tacos",
                    amount: 100
                },
                {
                    id: 433278,
                    label: "chili",
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
                    label: "empanadas",
                    amount: 50
                },
                {
                    id: 47578,
                    label: "tortillas",
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
                    label: "quesadillas",
                    amount: 300
                },
                {
                    id: 44878,
                    label: "enchiladas",
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
                    label: "guacamole",
                    amount: 50
                },
                {
                    id: 4378,
                    label: "tamales",
                    amount: 50
                }
            ]
        }
    ],
};

const users = (state = initialState, action = {}) => {
  switch (action.type) {
    case DISPLAY_MODAL:
        return {
            ...state,
            displayModal: !state.displayModal,
        };
    case DISPLAY_MODAL_EXP:
        return {
            ...state,
            displayModalExp: !state.displayModalExp,
            formInput: {
                ...state.formInput,
                currentUserExpID: action.payload,
                currentUserExpName: action.payload ? state.users.find((user) => (user.id === action.payload)).name : ""
            }
        };
    case DISPLAY_MODAL_DEL_USER:
        return {
            ...state,
            displayModalDelUser: !state.displayModalDelUser,
            formInput: {
                ...state.formInput,
                currentUserExpID: action.payload,
                currentUserExpName: action.payload ? state.users.find((user) => (user.id === action.payload)).name : ""
            }
        }
    case ADD_USER:
        return {
            ...state,
            users: [...state.users, {
                id: Math.max(...state.users.map((o) => o.id)) + 1 || 0, 
                name: state.formInput.inputModal, 
                expenses: []
            }],
            formInput: {
                ...state.formInput,
                inputModal: '',
            },
            displayModal: false,
        };
    case DEL_USER:
        return {
            ...state,
            users: state.users.filter(user => user.id !== state.formInput.currentUserExpID ),
            displayModalDelUser: !state.displayModalDelUser,
        };
    case DEL_USERS:
        return {
            ...state,
            users: [],
        }
    case UPDATE_INPUT:
        return {
            ...state,
            formInput: {
                ...state.formInput,
                ...action.payload,
            },
        };
    case ADD_EXPENSE:
        return {
            ...state,
            users: state.users.map((item) => {
                if (item.id !== state.formInput.currentUserExpID) {
                  return item
                }
                // Otherwise
                return {
                    ...item,
                    expenses: [...item.expenses,
                        {
                            id: 474458, //FIXME:
                            label: state.formInput.inputModalExp,
                            amount: Math.round(parseFloat(state.formInput.inputModalExpNum)*100)/100,
                        },
                    ]
                }
            }),
            formInput: {
                ...state.formInput,
                inputModalExp: "",
                inputModalExpNum: 0,
                currentUserExpID: 0,
            },
            displayModalExp: false,
        };
    case SWITCH_VIEW:
        return {
            ...state,
            switchResultPage: !state.switchResultPage
        };
    default:
        return state;
  }
};

Array.prototype.sum = function (prop) {
    let total = 0
    for ( let i = 0, _len = this.length; i < _len; i++ ) {
        total = parseInt((total+this[i][prop])*100)/100
    }
    return total
}

const roundFloorSign = (number) => (Math.sign(number) >= 1 ? Math.floor(number*100)/100 : Math.ceil(number*100)/100);
const roundCeilSign = (number) => (Math.sign(number) >= 1 ? Math.ceil(number*100)/100 : Math.floor(number*100)/100);
const roundRound = (number) => (Math.round(number*100)/100);

const roundArrayCorrectly = (array) => {

    const arrayWithFloatProblemWithIndex = array
        .map((o, i) => ({...o, index:i}))

    // We separate "good float numbers" (15.50) and "bad float numbes" (26.66666666...)
    let goodFloatNumbersArray = arrayWithFloatProblemWithIndex.filter(o => !((o.balance*100)%1))
    let badFloatNumbersArray = arrayWithFloatProblemWithIndex.filter(o => (o.balance*100)%1)

    // We separate bad float in two arrays
    let badFloatNumbersRoundedAlterArray = [];

    // -- methode math floor 
        badFloatNumbersRoundedAlterArray = [];
        for (let index = 0; index < badFloatNumbersArray.length; index++) {
            badFloatNumbersRoundedAlterArray.push({...badFloatNumbersArray[index], balance:roundFloorSign(badFloatNumbersArray[index].balance)})
        }
        if(!badFloatNumbersRoundedAlterArray.sum('balance')) {
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
        if(!badFloatNumbersRoundedAlterArray.sum('balance')) {
            return [
                ...badFloatNumbersRoundedAlterArray, 
                ...goodFloatNumbersArray
            ]
                .sort((a, b) => a.index - b.index) ;
        }

    // -- methode parsemiddle array
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

export const getDivision = (_friends) => { 
    
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
        for (let index = fiendsWithBalance.length - 1; index>0; index--) {
            if (friend.balance) {
                let currentUser = fiendsWithBalance[index];
                if (currentUser.balance) {

                    if (friend.balance > Math.abs(currentUser.balance)) {
                        const currentTransaction = roundRound(currentUser.balance);
                        friend.balance = roundRound(friend.balance+currentTransaction);
                        currentUser.balance = roundRound(currentUser.balance-currentTransaction);
                        transactions.push(`${friend.name} donne ${(currentTransaction-currentTransaction-currentTransaction)}€ a ${currentUser.name}`);
                    }  
                    
                    if (friend.balance <= Math.abs(currentUser.balance)) {
                        const currentTransaction = roundRound(friend.balance);
                        friend.balance = roundRound(friend.balance-currentTransaction);
                        currentUser.balance = roundRound(currentUser.balance+currentTransaction);
                        transactions.push(`${friend.name} donne ${currentTransaction}€ a ${currentUser.name}`);
                    } 
                }
            }
        }
    });

    return transactions;
}

export const getUserTotalAndColorInArrays =  (_friends) => {

    const positiveColor = "#cf992d";
    const negativeColor = "#17a2b8";
    let equalBalance = 0;

    const friends = _friends
        .map((user) => ({
            id: user.id,
            name: user.name,
            total: user.expenses.reduce((dollarbillyo, {amount}) => dollarbillyo + amount, 0),
        }))

    for (let i = 0; i < friends.length; i++) {
      equalBalance = equalBalance + friends[i].total;
    }

    return roundArrayCorrectly(friends).map((friend) => ({
        id: friend.id,
        name: friend.name,
        amount: roundRound((equalBalance / friends.length) - friend.total),
        color: (equalBalance / friends.length) - friend.total >= 0 ? negativeColor : positiveColor,
    }));
}

export default users;
