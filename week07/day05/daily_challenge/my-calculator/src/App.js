import React, { useState } from "react";

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operation, setOperation] = useState("add");
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);

    if (isNaN(a) || isNaN(b)) {
      setResult("Please enter valid numbers.");
      return;
    }

    let res;

    switch (operation) {
      case "add":
        res = a + b;
        break;
      case "subtract":
        res = a - b;
        break;
      case "multiply":
        res = a * b;
        break;
      case "divide":
        if (b === 0) {
          setResult("Error: Division by zero");
          return;
        }
        res = a / b;
        break;
      default:
        res = null;
    }

    setResult(res);
  };

  return (
    <div style={{ maxWidth: 320, margin: "40px auto", fontFamily: "Arial, sans-serif" }}>
      <h2>Universal Calculator</h2>

      <input
        type="number"
        placeholder="First number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        style={{ width: "100%", padding: 8, marginBottom: 10 }}
      />

      <input
        type="number"
        placeholder="Second number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        style={{ width: "100%", padding: 8, marginBottom: 10 }}
      />

      <select
        value={operation}
        onChange={(e) => setOperation(e.target.value)}
        style={{ width: "100%", padding: 8, marginBottom: 10 }}
      >
        <option value="add">Addition (+)</option>
        <option value="subtract">Subtraction (-)</option>
        <option value="multiply">Multiplication (×)</option>
        <option value="divide">Division (÷)</option>
      </select>

      <button onClick={handleCalculate} style={{ width: "100%", padding: 10 }}>
        Add Them
      </button>

      {result !== null && (
        <div style={{ marginTop: 20, fontWeight: "bold", fontSize: 18 }}>
          Result: {result}
        </div>
      )}
    </div>
  );
}

export default App;

