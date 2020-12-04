// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import UserList from '../components/UserList';

// Action Creators
import { displayModal, addExp } from '../actions/card';

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
  addExpense: (id) => {
    dispatch(addExp(id))
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
