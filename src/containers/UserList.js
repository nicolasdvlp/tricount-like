// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import UserList from '../components/UserList';

// Action Creators
import { displayModal, displayModalExp, displayModalDelUser } from '../actions/card';

// === State (data) ===
const mapStateToProps = (state) => ({
    users: state.main.users
});

// === Actions ===
const mapDispatchToProps = (dispatch) => {
return ({
  switchModal: () => {
    dispatch(displayModal());
  },
  addExpense: (userID) => {
    dispatch(displayModalExp(userID))
  },
  deleteUserModal: (userID) => {
    dispatch(displayModalDelUser(userID))
  },
});
}
// Container
const UserListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserList);

// == Export
export default UserListContainer;
