import React from "react";
import { connect } from "react-redux";

const mapStateToProps = store => ({
  data: store.test.data
});

const TestComponent = ({ data }) => {
  return <h1>{data}</h1>;
};

export default connect(mapStateToProps)(TestComponent);
