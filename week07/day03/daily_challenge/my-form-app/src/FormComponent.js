 import React from "react";

export default function FormComponent(props) {
  const { data, handleChange, handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input
          type="text"
          name="firstName"
          value={data.firstName}
          onChange={handleChange}
          required
        />
      </label>
      <br />

      <label>
        Last Name:
        <input
          type="text"
          name="lastName"
          value={data.lastName}
          onChange={handleChange}
          required
        />
      </label>
      <br />

      <label>
        Age:
        <input
          type="number"
          name="age"
          value={data.age}
          onChange={handleChange}
          required
          min="0"
        />
      </label>
      <br />

      <label>
        Gender:
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={data.gender === "male"}
            onChange={handleChange}
            required
          />
          Male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={data.gender === "female"}
            onChange={handleChange}
          />
          Female
        </label>
      </label>
      <br />

      <label>
        Select your destination:
        <select
          name="destination"
          value={data.destination}
          onChange={handleChange}
          required
        >
          <option value="">-- Please Choose a destination --</option>
          <option value="Japan">Japan</option>
          <option value="Brazil">Brazil</option>
          <option value="France">France</option>
          <option value="Australia">Australia</option>
        </select>
      </label>
      <br />

      <fieldset>
        <legend>Dietary restrictions:</legend>
        <label>
          <input
            type="checkbox"
            name="nutsFree"
            checked={data.dietaryRestrictions.nutsFree}
            onChange={handleChange}
          />
          Nuts free
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="lactoseFree"
            checked={data.dietaryRestrictions.lactoseFree}
            onChange={handleChange}
          />
          Lactose free
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="vegan"
            checked={data.dietaryRestrictions.vegan}
            onChange={handleChange}
          />
          Vegan
        </label>
      </fieldset>

      <br />
      <button type="submit">Submit</button>
    </form>
  );
}
