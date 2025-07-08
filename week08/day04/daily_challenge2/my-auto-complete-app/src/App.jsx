import React, { useState } from "react";

// Mock countries data (you can move this to countries.js if preferred)
import React, { useState } from "react";

// Mock countries data (you can move this to countries.js if preferred)
const countries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua & Deps",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Cape Verde",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Congo",
  "Costa Rica",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Democratic Republic of the Congo",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "East Timor",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Ivory Coast",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Korea North",
  "Korea South",
  "Kosovo",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macedonia",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Palestine",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts & Nevis",
  "Saint Lucia",
  "Saint Vincent & The Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome & Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Swaziland",
  "Sweden",
  "Switzerland",
  "Syria",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Togo",
  "Tonga",
  "Trinidad & Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States of America",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe"
];

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

// Basic inline styles for layout and appearance
const styles = {
  container: {
    backgroundColor: "#f3f4f6", // light gray background
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
    marginTop: "0.25rem",
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