import React, { Component } from "react";
import data from "./data.json";

class Example3 extends Component {
  render() {
    return (
      <div>
        <h3><em>Example3 Component</em></h3>
        {data.Experiences.map((exp, index) => (
          <div key={index} style={{ marginBottom: "20px", border: "1px solid #ccc", padding: "10px" }}>
            <div>
              <img
                src="https://via.placeholder.com/100?text=NO+IMAGE+AVAILABLE"
                alt="No Available"
              />
            </div>
            <div><strong>{exp.company}</strong></div>
            <div>{exp.position}</div>
            <div>{exp.duration} @ {exp.location}</div>
            <div>{exp.description}</div>
          </div>
        ))}
      </div>
    );
  }
}

export default Example3;
