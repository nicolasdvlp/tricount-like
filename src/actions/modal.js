export const DISPLAY_MODAL = 'DISPLAY_MODAL';

export const ADD_USER = 'ADD_USER';

export const UPDATE_INPUT = 'UPDATE_INPUT';

export const displayModal = () => ({
  type: DISPLAY_MODAL,
});

export const addUser = (payload) => ({
  type: ADD_USER,
  payload
})

export const updateInput = (payload) => ({
  type: UPDATE_INPUT,
  payload
})