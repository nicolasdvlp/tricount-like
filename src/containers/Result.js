// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Result from '../components/Result';
import { getUserAndTotalInArrays, getDivision } from '../reducers/main'

// Action Creators

// === State (data) ===
const mapStateToProps = (state) => ({
    labels: getUserAndTotalInArrays(state.main.users)[0],
    data: getUserAndTotalInArrays(state.main.users)[1],
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
