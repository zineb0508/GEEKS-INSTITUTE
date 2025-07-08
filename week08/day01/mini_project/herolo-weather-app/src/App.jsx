// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import WeatherPage from './pages/WeatherPage';
// import FavoritesPage from './pages/FavoritesPage';

// function App() {
//   return (
//     <Router>
//       <nav style={{ padding: '1rem', background: '#1976d2', color: 'white' }}>
//         <Link to="/" style={{ marginRight: '1rem', color: 'white', textDecoration: 'none' }}>Weather</Link>
//         <Link to="/favorites" style={{ color: 'white', textDecoration: 'none' }}>Favorites</Link>
//       </nav>
//       <Routes>
//         <Route path="/" element={<WeatherPage />} />
//         <Route path="/favorites" element={<FavoritesPage />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
// src/App.jsx
import React from 'react';
import WeatherPage from './pages/WeatherPage';

export default function App() {
  return <WeatherPage />;
}
