// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import ModalFormExp from '../components/ModalDelUser';

// Action Creators
import { displayModalDelUser, delUser } from '../actions/card';

// === State (data) ===
const mapStateToProps = (state) => ({
    show: state.main.displayModalDelUser,
    userName: state.main.formInput.currentUserExpName,
});

// === Actions ===
const mapDispatchToProps = (dispatch) => ({
    onHide: () => {
        dispatch(displayModalDelUser());
    },
    onSubmitDelUser: () => {
        dispatch(delUser())
    }
});

// Container
const ModalFormExpContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ModalFormExp);

// == Export
export default ModalFormExpContainer;
