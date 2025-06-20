import React, { Component } from "react";

class BuggyCounter extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  handleClick = () => {
    this.setState(({ counter }) => {
      const newCounter = counter + 1;
      if (newCounter === 5) {
        throw new Error("I crashed!");
      }
      return { counter: newCounter };
    });
  };

  render() {
    return (
      <h1 onClick={this.handleClick} style={{ cursor: "pointer" }}>
        {this.state.counter}
      </h1>
    );
  }
}

export default BuggyCounter;
