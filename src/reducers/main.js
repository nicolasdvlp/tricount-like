import { DISPLAY_MODAL, DISPLAY_MODAL_EXP, ADD_USER, UPDATE_INPUT, ADD_EXPENSE } from '../actions/card'
import { SWITCH_VIEW } from '../actions/switchView'

const initialState = {
    displayModalExp: false,
    displayModal: false,
    switchResultPage: false,
    formInput: {
        inputModal: "",
        inputModalExp: "",
        inputModalExpNum: "",
        currentUserExpID: 0,
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
            }
        };
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
                            id: 474458,
                            label: state.formInput.inputModalExp,
                            amount: state.formInput.inputModalExpNum
                        },
                    ]
                }
            }),
            formInput: {
                ...state.formInput,
                inputModalExp: "",
                inputModalExpNum: "",
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

export default users;
