
// EXERCICE01:

//  import React from "react";
// import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import ErrorBoundary from "./ErrorBoundary";

// // Screens
// const HomeScreen = () => <h1>home</h1>;
// const ProfileScreen = () => <h1>profile</h1>;
// const ShopScreen = () => {
//   throw new Error("Shop Screen Error");
// };

// function App() {
//   return (
//     <BrowserRouter>
//       <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
//         <NavLink to="/" className="nav-link text-white mx-2">Home</NavLink>
//         <NavLink to="/profile" className="nav-link text-white mx-2">Profile</NavLink>
//         <NavLink to="/shop" className="nav-link text-white mx-2">Shop</NavLink>
//       </nav>

//       <div className="container mt-4">
//         <Routes>
//           <Route path="/" element={<ErrorBoundary><HomeScreen /></ErrorBoundary>} />
//           <Route path="/profile" element={<ErrorBoundary><ProfileScreen /></ErrorBoundary>} />
//           <Route path="/shop" element={<ErrorBoundary><ShopScreen /></ErrorBoundary>} />
//         </Routes>
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;



// EXERCICE2: 
// import React from "react";
// import PostList from "./postList";

// function App() {
//   return (
//     <div className="container mt-4">
//       <PostList />
//     </div>
//   );
// }

// export default App;

//exercie3:
// import React from "react";
// import Example1 from "./Example1";
// import Example2 from "./Example2";
// import Example3 from "./Example3";

// function App() {
//   return (
//     <div className="App">
//       <Example1 />
//       <Example2 />
//       <Example3 />
//     </div>
//   );
// }

// export default App;

// EXERCICE04:
import React from "react";

function App() {
  const handlePostData = async () => {
    const url = "https://webhook.site/dea3ff9a-0f13-44a4-a904-d0ac7296d593"
; 

    const data = {
      key1: "myusername",
      email: "mymail@gmail.com",
      name: "Isaac",
      lastname: "Doe",
      age: 27
    };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      const result = await response.text(); // Or use .json() if JSON response
      console.log("✅ Server response:", result);
    } catch (error) {
      console.error("❌ Error sending data:", error);
    }
  };

  return (
    <div className="App">
      <h2>Exercise 4: Post JSON Data</h2>
      <button onClick={handlePostData}>Send JSON to Webhook</button>
    </div>
  );
}

export default App;
