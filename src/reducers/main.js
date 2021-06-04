import { DISPLAY_MODAL, DISPLAY_MODAL_EXP, ADD_USER, UPDATE_INPUT, ADD_EXPENSE, DEL_USER, DISPLAY_MODAL_DEL_USER, DEL_USERS } from '../actions/card'
import { SWITCH_VIEW } from '../actions/switchView'
import { v4 as uuidv4 } from 'uuid';


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
      id: "1",
      name: "Archibald",
      expenses: [
        {
          id: "474",
          label: "fajitas",
          amount: 200
        },
        {
          id: "45478",
          label: "burritos",
          amount: 200
        }
      ]
    },
    {
      id: "2",
      name: "Théodule",
      expenses: [
        {
          id: "47758",
          label: "tacos",
          amount: 100
        },
        {
          id: "433278",
          label: "chili",
          amount: 100
        }
      ]
    },
    {
      id: "3",
      name: "Eugène",
      expenses: [
        {
          id: "4718",
          label: "empanadas",
          amount: 50
        },
        {
          id: "47578",
          label: "tortillas",
          amount: 50
        }
      ]
    },
    {
      id: "4",
      name: "Stanislas",
      expenses: [
        {
          id: "47338",
          label: "quesadillas",
          amount: 300
        },
        {
          id: "44878",
          label: "enchiladas",
          amount: 300
        }
      ]
    },
    {
      id: "5",
      name: "Hippolyte",
      expenses: [
        {
          id: "47968",
          label: "guacamole",
          amount: 50
        },
        {
          id: "4378",
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
          id: uuidv4(),
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
        users: state.users.filter(user => user.id !== state.formInput.currentUserExpID),
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
              amount: Math.round(parseFloat(state.formInput.inputModalExpNum) * 100) / 100,
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
        switchResultPage: action.payload || !state.switchResultPage
      };
    default:
      return state;
  }
};

Array.prototype.sum = function (prop) {
  let total = 0
  for (let i = 0, _len = this.length; i < _len; i++) {
    total = parseInt((total + this[i][prop]) * 100) / 100
  }
  return total
}

const precise_round = (num, decimals) => {
  var t = Math.pow(10, decimals);
  return +(Math.round((num * t) + (decimals > 0 ? 1 : 0) * (Math.sign(num) * (10 / Math.pow(100, decimals)))) / t).toFixed(decimals);
}

const doTransaction = (x, y, transactionArray) => {
  if (Math.abs(x.balance) > Math.abs(y.balance)) {
    const currentTransaction = y.balance; // -32.2
    x.balance = precise_round((x.balance + currentTransaction), 2);
    y.balance = precise_round((y.balance - currentTransaction), 2);
    transactionArray.push(`${x.name} donne ${(currentTransaction)}€ a ${y.name}`);
  }
  if (Math.abs(x.balance) <= Math.abs(y.balance)) {
    const currentTransaction = x.balance;  // -30.8
    x.balance = precise_round((x.balance - currentTransaction), 2);
    y.balance = precise_round((y.balance + currentTransaction), 2);
    transactionArray.push(`${x.name} donne ${currentTransaction}€ a ${y.name}`);
  }
}

export const getDivision = (friends) => {

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

  friends.forEach((friend) => {

    for (let index = friends.length - 1; index >= 0; index--) {
      let currentUser = friends[index];

      if (!friend.balance) break
      if (friend.id === currentUser.id || !currentUser.balance) continue;

      doTransaction(friend, currentUser, transactions)
    }
  })
  return transactions;
}

export const getUserTotalAndColorInArrays = (friends) => {

  const positiveColor = "#cf992d",
    negativeColor = "#17a2b8";
  let equalBalance = 0;

  friends = friends
    .map((user) => {
      let total = user.expenses.length
        ? user.expenses.reduce((dollarbillyo, { amount }) => dollarbillyo - amount, 0)
        : 0;
      equalBalance += total;
      return { id: user.id, name: user.name, total };
    })

  return friends.map((friend) => ({
    id: friend.id,
    name: friend.name,
    amount: precise_round(((equalBalance / friends.length) - friend.total), 2),
    color: (equalBalance / friends.length) - friend.total >= 0 ? negativeColor : positiveColor,
  }));
}

export default users;
