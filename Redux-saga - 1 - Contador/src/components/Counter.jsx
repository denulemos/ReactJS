import React from "react";
import { connect } from "react-redux";

import {
  increment,
  decrement,
  incrementAsync,
  decrementAsync
} from "../state/actions";

class Counter extends React.Component {
  render() {
    return (
      <div className="Counter">
        <p>{this.props.counter}</p>
        <button onClick={this.props.increment}>Increment</button>
        <button onClick={this.props.decrement}>Decrement</button>
        <button onClick={this.props.incrementAsync}>Increment Async</button>
        <button onClick={this.props.decrementAsync}>Decrement Async</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  counter: state.counter
});

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
  incrementAsync: () => dispatch(incrementAsync()),
  decrementAsync: () => dispatch(decrementAsync())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
