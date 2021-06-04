// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import ModalFormExp from '../components/ModalFormExp';

// Action Creators
import { displayModalExp, updateInput, addExp } from '../actions/card';

// === State (data) ===
const mapStateToProps = (state) => ({
    show: state.main.displayModalExp,
    inputModalExp: state.main.formInput.inputModalExp,
    inputModalExpNum: state.main.formInput.inputModalExpNum,
});

// === Actions ===
const mapDispatchToProps = (dispatch) => ({
    onHide: () => {
        dispatch(displayModalExp());
    },
    onChangeInput: (text) => {
        dispatch(updateInput(text));
    },
    onSubmitExp: () => {
        dispatch(addExp())
    }
});

// Container
const ModalFormExpContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ModalFormExp);

// == Export
export default ModalFormExpContainer;
