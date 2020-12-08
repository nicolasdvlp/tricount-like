import { DISPLAY_MODAL, DISPLAY_MODAL_EXP, ADD_USER, UPDATE_INPUT, ADD_EXPENSE, DEL_USER, DISPLAY_MODAL_DEL_USER } from '../actions/card'
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
            name: "alex",
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
            name: "bruno",
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
            name: "julia",
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
            name: "loic",
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
            name: "rene",
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

export const getUserAndTotalInArrays =  (userList) => {
    const users = [];
    const totals = [];

    const _userList = userList.map((user) => ({
        id: user.id,
        name: user.name,
        amount: user.expenses.reduce((dollarbillyo, {amount}) => dollarbillyo + amount, 0),
    }))

    const nbUser = _userList.length;
    let equalBalance = 0;
  
    for (let index = 0; index < _userList.length; index++) {
      equalBalance = equalBalance + _userList[index].amount;
    }
    const ___userList = _userList.map((friend) => ({
        ...friend,
        balance: (equalBalance / nbUser) - friend.amount
      }));

      ___userList.forEach(user => {
        users.push(user.name);
        totals.push(user.balance)
    });

    console.log(users, totals)
    return [users, totals]
}

export const getDivision = (_friends) => { 
    
    const friends = _friends.map((user) => ({
        id: user.id,
        name: user.name,
        amount: user.expenses.reduce((dollarbillyo, {amount}) => dollarbillyo + amount, 0),
    }))
    
    friends.sort((a, b) => a.amount - b.amount);
  
    // let transactionNumber = 0;
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
