// src/App.jsx
import React, { useState } from "react";
import countries from "./countries";

const App = () => {
  const [text, setText] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setText(value);

    if (!value.trim()) {
      setSuggestions([]);
      return;
    }

    const filtered = countries.filter((country) =>
      country.toLowerCase().includes(value.toLowerCase())
    );

    setSuggestions(filtered);
  };

  const selectCountry = (country) => {
    setText(country);
    setSuggestions([]);
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.heading}>Auto Completed</h1>
        <div style={styles.inputWrapper}>
          <input
            type="text"
            value={text}
            onChange={handleInputChange}
            placeholder="Enter a country..."
            style={styles.input}
          />
          {suggestions.length > 0 && (
            <ul style={styles.suggestionList}>
              {suggestions.map((country, index) => (
                <li
                  key={index}
                  onClick={() => selectCountry(country)}
                  style={styles.suggestionItem}
                >
                  {country}
                </li>
              ))}
              <li style={styles.footer}>
                Suggestions: {suggestions.length}
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#f3f4f6",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Arial, sans-serif",
  },
  card: {
    backgroundColor: "#ffffff",
    padding: "2rem",
    borderRadius: "8px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    width: "100%",
    maxWidth: "500px",
  },
  heading: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: "1rem",
  },
  inputWrapper: {
    position: "relative",
  },
  input: {
    width: "100%",
    padding: "0.75rem 1rem",
    border: "1px solid #d1d5db",
    borderRadius: "6px",
    fontSize: "1rem",
    outline: "none",
    transition: "border-color 0.2s",
  },
  suggestionList: {
    position: "absolute",
    top: "100%",
    left: 0,
    right: 0,
    maxHeight: "200px",
    overflowY: "auto",
    backgroundColor: "#ffffff",
    border: "1px solid #d1d5db",
    borderRadius: "6px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
    zIndex: 1000,
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
  suggestionItem: {
    padding: "0.75rem 1rem",
    cursor: "pointer",
    borderBottom: "1px solid #eee",
    transition: "background-color 0.2s",
  },
  footer: {
    backgroundColor: "#facc15",
    color: "#1f2937",
    textAlign: "center",
    padding: "0.5rem 0",
    fontWeight: "bold",
  },
};

export default App;