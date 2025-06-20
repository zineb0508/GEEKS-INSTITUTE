// src/FavoriteColor.js
import React, { Component } from "react";

class FavoriteColor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favoriteColor: "red",
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate called");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("in getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("after update");
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ favoriteColor: "yellow" });
    }, 2000);
  }

  render() {
    return (
      <div>
        <h1>My favorite color is {this.state.favoriteColor}</h1>
        <button onClick={() => this.setState({ favoriteColor: "blue" })}>
          Change to Blue
        </button>
      </div>
    );
  }
}

export default FavoriteColor;
