export const ADD_EXPENSE = 'ADD_EXPENSE';
export const DISPLAY_MODAL = 'DISPLAY_MODAL';
export const DISPLAY_MODAL_EXP = 'DISPLAY_MODAL_EXP';
export const ADD_USER = 'ADD_USER';
export const UPDATE_INPUT = 'UPDATE_INPUT';

export const displayModal = () => ({
  type: DISPLAY_MODAL,
});

export const displayModalExp = (payload) => ({
  type: DISPLAY_MODAL_EXP,
  payload
});

export const addUser = (payload) => ({
  type: ADD_USER,
  payload
})

export const updateInput = (payload) => ({
  type: UPDATE_INPUT,
  payload
})

export const addExp = (payload) => ({
  type: ADD_EXPENSE,
  payload
})