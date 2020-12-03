// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import ModalForm from '../components/ModalForm';

// Action Creators
import { displayModal, addUser, updateInput } from '../actions/modal';

// === State (data) ===
const mapStateToProps = (state) => ({
    show: state.main.displayModal,
    inputModal: state.main.inputModal,
});

// === Actions ===
const mapDispatchToProps = (dispatch) => ({
    onHide: () => {
        dispatch(displayModal());
    },
    clickAddUser: (e) => {
        e.preventDefault();
        dispatch(addUser());
    },
    onChangeInput: (text) => {
        dispatch(updateInput(text));
    }
});

// Container
const ModalFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ModalForm);

// == Export
export default ModalFormContainer;
