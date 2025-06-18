import React, { Component } from 'react';
import './Exercise.css';

const style_header = {
  color: "white",
  backgroundColor: "DodgerBlue",
  padding: "10px",
  fontFamily: "Arial"
};

class Exercise extends Component {
  render() {
    return (
      <div>
        <h1 style={style_header}>This is a heading</h1>
        <p className="para">This is a styled paragraph.</p>
        <a href="https://react.dev" target="_blank" rel="noreferrer">Visit React</a>
        <form>
          <input type="text" placeholder="Type something..." />
          <button type="submit">Submit</button>
        </form>
        <img src="https://via.placeholder.com/150" alt="placeholder" />
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
        </ul>
      </div>
    );
  }
}

export default Exercise;
