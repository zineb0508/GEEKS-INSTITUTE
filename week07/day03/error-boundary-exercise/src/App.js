// import React from "react";
// import BuggyCounter from "./BuggyCounter";

// function App() {
//   return (
//     <div className="App">
//       <h1>Simulation 3: No Error Boundary</h1>
//       <BuggyCounter />
//     </div>
//   );
// }

// export default App;
// exercice 2:
// src/App.js
// import React from "react";
// import FavoriteColor from "./FavoriteColor";

// function App() {
//   return (
//     <div className="App">
//       <FavoriteColor />
//     </div>
//   );
// }

// export default App;
// exercice 3:
import React, { Component } from "react";
import Child from "./Child";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
    };
  }

  handleDelete = () => {
    this.setState({ show: false });
    console.log("click");
  };

  render() {
    return (
      <div>
        <h2>initial</h2>

        {this.state.show ? <Child /> : <h1>Unmounted</h1>}

        <button onClick={this.handleDelete}>Delete Header</button>
      </div>
    );
  }
}

export default App;
