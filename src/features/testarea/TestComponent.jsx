import React from "react";
import { connect } from "react-redux";
import { incrementCounter, decrementCounter } from "./testActions";
import { Button } from "semantic-ui-react";

const mapStateToProps = store => ({
  data: store.test.data
});

const actions = {
  incrementCounter,
  decrementCounter
};

const TestComponent = ({ data, incrementCounter, decrementCounter }) => {
  return (
    <div>
      <h1>{data}</h1>
      <Button onClick={incrementCounter}>+</Button>
      <Button onClick={decrementCounter}>-</Button>
    </div>
  );
};

export default connect(
  mapStateToProps,
  actions
)(TestComponent);
