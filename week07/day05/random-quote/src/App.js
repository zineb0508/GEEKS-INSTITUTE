// import React, { useState } from 'react';
// import quotes from './quotes';
// import './App.css';

// function App() {
//   const getRandomIndex = (excludeIndex) => {
//     let newIndex;
//     do {
//       newIndex = Math.floor(Math.random() * quotes.length);
//     } while (newIndex === excludeIndex);
//     return newIndex;
//   };

//   const getRandomColor = () => {
//     const colors = ['#FF5733', '#33FF57', '#3357FF', '#F0A500', '#7D3C98'];
//     return colors[Math.floor(Math.random() * colors.length)];
//   };

//   const [quoteIndex, setQuoteIndex] = useState(0);
//   const [color, setColor] = useState('#FF5733');

//   const changeQuote = () => {
//     const newIndex = getRandomIndex(quoteIndex);
//     const newColor = getRandomColor();
//     setQuoteIndex(newIndex);
//     setColor(newColor);
//   };

//   const { quote, author } = quotes[quoteIndex];

//   return (
//     <div
//       className="App"
//       style={{
//         backgroundColor: color,
//         height: '100vh',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         transition: 'background-color 0.5s ease'
//       }}
//     >
//       <div
//         style={{
//           background: '#fff',
//           padding: '2rem',
//           borderRadius: '10px',
//           maxWidth: '500px',
//           textAlign: 'center'
//         }}
//       >
//         <h1 style={{ color }}>{quote}</h1>
//         <p style={{ fontStyle: 'italic', marginBottom: '1rem' }}>— {author}</p>
//         <button
//           onClick={changeQuote}
//           style={{
//             padding: '10px 20px',
//             fontSize: '16px',
//             backgroundColor: color,
//             color: '#fff',
//             border: 'none',
//             borderRadius: '5px',
//             cursor: 'pointer'
//           }}
//         >
//           New Quote
//         </button>
//       </div>
//     </div>
//   );
// }

// export default App;
