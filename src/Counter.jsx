import React from 'react';
// import { Component } from 'react';
// import { connect } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from './actions';

// class Counter extends Component {
//   render() {
//     const { counter, increment, decrement } = this.props;
//     return (
//       <div>
//         <h2>Counter: {counter}</h2>
//         <button onClick={increment}>Increment</button>
//         <button onClick={decrement}>Decrement</button>
//       </div>
//     );
//   }
// }

// const Counter = ({ counter, increment, decrement }) => {
//   return (
//     <div>
//       <h2>Counter: {counter}</h2>
//       <button onClick={increment}>Increment</button>
//       <button onClick={decrement}>Decrement</button>
//     </div>
//   );
// };

// const mapStateToProps = (state) => ({
//   counter: state.counter
// });

// const mapDispatchToProps = {
//   increment,
//   decrement
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
const Counter = () => {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Counter: {counter}</h2>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default Counter;