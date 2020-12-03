// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Main from '../components/Main';

// Action Creators
import { displayModal } from '../actions/modal';

// === State (data) ===
const mapStateToProps = (state) => ({
    ...state
});

// === Actions ===
const mapDispatchToProps = (dispatch) => ({
    switchModal: () => {
    dispatch(displayModal());
  },
});

// Container
const MainContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);

// == Export
export default MainContainer;
