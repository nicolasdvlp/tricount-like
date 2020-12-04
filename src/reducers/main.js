import { DISPLAY_MODAL, ADD_USER, UPDATE_INPUT, ADD_EXPENSE } from '../actions/card'
import { SWITCH_VIEW } from '../actions/switchView'

const initialState = {
    switchResultPage: false,
    displayModal: false,
    inputModal: '',
    displayModalExp: false,
    inputModalExp: '',
    inputModalNum: 0,
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
    ]
};

const users = (state = initialState, action = {}) => {
  switch (action.type) {
    case DISPLAY_MODAL:
        return {
            ...state,
            displayModal: !state.displayModal,
        };
    case ADD_USER:
        return {
            ...state,
            users: [...state.users, {
                id: Math.max(...state.users.map((o) => o.id)) + 1, 
                name: state.inputModal, 
                expenses: []
            }],
            inputModal: '',
            displayModal: false,

        };
    case UPDATE_INPUT:
        return {
            ...state,
            inputModal: action.payload,
        };
    case ADD_EXPENSE:
        return {
            ...state,
            users: state.users.map((item) => {
                if (item.id !== action.payload) {
                  return item
                }
                // Otherwise
                return {
                    ...item,
                    expenses: [...item.expenses,
                        {
                            id: 474458,
                            label: "npainnogain",
                            amount: 100
                        },
                    ]
                }
            })
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

export default users;
