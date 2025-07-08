import React, { Component } from "react";
import data from "./data.json";

class Example2 extends Component {
  render() {
    const skills = data.Skills;
    return (
      <div>
        <h3><em>Example2 Component</em></h3>
        {Object.keys(skills).map((category, index) => (
          <div key={index}>
            <strong>{category}</strong>
            <ul>
              {skills[category].map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }
}

export default Example2;
