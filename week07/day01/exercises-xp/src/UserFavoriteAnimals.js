// src/UserFavoriteAnimals.js
import React, { Component } from 'react';

class UserFavoriteAnimals extends Component {
  render() {
    return (
      <ul>
        {this.props.favAnimals.map((animal, index) => (
          <li key={index}>{animal}</li>
        ))}
      </ul>
    );
  }
}

export default UserFavoriteAnimals;
