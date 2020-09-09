import React from "react";
import { connect } from "react-redux";

import { increment, decrement } from "../actions";

class EventsIndex extends React.Component {

  render() {
    const props = this.props;

    return (
      <>
        <div>count: {props.value}</div>
        <button onClick={props.increment}>+</button>
        <button onClick={props.decrement}>-</button>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    value: state.count.value
  };
};

const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex);
