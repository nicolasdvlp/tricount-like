// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Main from '../components/Main';

// Action Creators
import { swtchView } from '../actions/switchView'

// === State (data) ===
const mapStateToProps = (state) => ({
  switchResultPage: state.main.switchResultPage
});

// === Actions ===
const mapDispatchToProps = (dispatch) => ({
  clickChangeView: (payload) => {
    if (typeof (payload) === 'boolean')
      dispatch(swtchView(payload));
    else
      dispatch(swtchView());
  }
});

// Container
const MainContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);

// == Export
export default MainContainer;
