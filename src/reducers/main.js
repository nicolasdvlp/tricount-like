import { DISPLAY_MODAL, DISPLAY_MODAL_EXP, ADD_USER, UPDATE_INPUT, ADD_EXPENSE, DEL_USER, DISPLAY_MODAL_DEL_USER } from '../actions/card'
import { SWITCH_VIEW } from '../actions/switchView'

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
                id: Math.max(...state.users.map((o) => o.id)) + 1, 
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

export const getUserTotalAndColorInArrays =  (_friends) => {

    const positiveColor = "#a8a243";
    const negativeColor = "#a84343";

    const nbUser = _friends.length;
    let equalBalance = 0;

    const friends = _friends
        .map((user) => ({
            id: user.id,
            name: user.name,
            total: user.expenses.reduce((dollarbillyo, {amount}) => dollarbillyo + amount, 0),
        }))

    for (let index = 0; index < friends.length; index++) {
      equalBalance = equalBalance + friends[index].total;
    }

    return friends.map((friend) => ({
        id: friend.id,
        name: friend.name,
        amount: (equalBalance / nbUser) - friend.total,
        color: (equalBalance / nbUser) - friend.total >= 0 ? negativeColor : positiveColor,
      }));
     
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
  
    let fiendsWithBalance = friends.map((friend) => ({
      ...friend,
      balance: (equalBalance / nbUser) - friend.amount
    }));
  
    fiendsWithBalance.forEach((friend) => {
      if (friend.balance) {
    
        for (let index = fiendsWithBalance.length - 1; friend.balance; index--) {
    
          let currentUser = fiendsWithBalance[index];
    
          if (currentUser.balance) {
            if (friend.balance > (currentUser.balance - currentUser.balance - currentUser.balance)) {
      
              const currentTransaction = currentUser.balance + 0;
              friend.balance += currentTransaction;
              currentUser.balance -= currentTransaction;
            //   transactionNumber++;
              transactions.push(`${friend.name} donne ${(currentTransaction-currentTransaction-currentTransaction)}€ a ${currentUser.name}`);
      
            } else if ((friend.balance <= (currentUser.balance - currentUser.balance - currentUser.balance))) {
  
              const currentTransaction = friend.balance + 0;
              friend.balance -= currentTransaction;
              currentUser.balance += currentTransaction;
            //   transactionNumber++;
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

export default users;
