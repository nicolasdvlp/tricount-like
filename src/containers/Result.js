// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Result from '../components/Result';
import { getUserTotalAndColorInArrays, getDivision } from '../reducers/main'

// Action Creators

// === State (data) ===
const mapStateToProps = (state) => ({
  data: getUserTotalAndColorInArrays(state.main.users),
  transactions: getDivision(state.main.users),
});

// === Actions ===
const mapDispatchToProps = null;

// Container
const ResultContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Result);

// == Export
export default ResultContainer;
