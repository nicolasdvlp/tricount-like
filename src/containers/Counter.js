// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Counter from 'src/components/Counter';

// Action Creators
import { increment, decrement } from '../actions';

// === State (data) ===
const mapStateToProps = (state, ownProps) => ({
  count: state.counter.value,
});

// === Actions ===
const mapDispatchToProps = (dispatch, ownProps) => ({
  increment: () => {
    dispatch(increment());
  },
  decrement: () => {
    dispatch(decrement());
  },
});

// Container
const CounterContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Counter);

// == Export
export default CounterContainer;
