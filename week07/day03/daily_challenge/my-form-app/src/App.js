import React, { Component } from "react";
import FormComponent from "./FormComponent";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      destination: "",
      dietaryRestrictions: {
        nutsFree: false,
        lactoseFree: false,
        vegan: false,
      },
    };
  }

  handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    if (type === "checkbox") {
      // Update nested dietaryRestrictions state using computed property name
      this.setState((prevState) => ({
        dietaryRestrictions: {
          ...prevState.dietaryRestrictions,
          [name]: checked,
        },
      }));
    } else {
      this.setState({
        [name]: value,
      });
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { firstName, lastName, age, gender, destination, dietaryRestrictions } = this.state;

    // Build dietary restrictions string for URL query: include only checked ones
    const dietaryQuery = Object.entries(dietaryRestrictions)
      .filter(([key, checked]) => checked)
      .map(([key]) => key)
      .join(",");

    // Create URLSearchParams for cleaner URL encoding
    const params = new URLSearchParams({
      firstName,
      lastName,
      age,
      gender,
      destination,
    });

    // Add dietary restrictions as a comma-separated string, or skip if empty
    if (dietaryQuery) {
      params.append("dietaryRestrictions", dietaryQuery);
    }

    // Update the URL without reloading page
    window.history.replaceState(null, "", `/?${params.toString()}`);

    alert("Form submitted! Check the URL.");
  };

  render() {
    const { firstName, lastName, age, gender, destination, dietaryRestrictions } = this.state;

    return (
      <div>
        <FormComponent
          data={{ firstName, lastName, age, gender, destination, dietaryRestrictions }}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />

        <h2>Entered information:</h2>
        <p>Your name: {firstName} {lastName}</p>
        <p>Your age: {age}</p>
        <p>Your gender: {gender}</p>
        <p>Your destination: {destination}</p>
        <p>Your dietary restrictions:</p>
        <ul>
          <li>Nuts free: {dietaryRestrictions.nutsFree ? "Yes" : "No"}</li>
          <li>Lactose free: {dietaryRestrictions.lactoseFree ? "Yes" : "No"}</li>
          <li>Vegan meal: {dietaryRestrictions.vegan ? "Yes" : "No"}</li>
        </ul>
      </div>
    );
  }
}

export default App;

