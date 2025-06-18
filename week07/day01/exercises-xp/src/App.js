//exercice01:
/*
import React from 'react';

function App() {
  const myelement = <h1>I Love JSX!</h1>;
  const sum = 5 + 5;

  return (
    <div>
      <p>Hello World!</p>
      {myelement}
      <p>React is {sum} times better with JSX</p>
    </div>
  );
}

export default App;*/
//exercice02:
/*
import React from 'react';
import UserFavoriteAnimals from './UserFavoriteAnimals';

const user = {
  firstName: 'Bob',
  lastName: 'Dylan',
  favAnimals: ['Horse', 'Turtle', 'Elephant', 'Monkey']
};

function App() {
  return (
    <div>
      <h3>{user.firstName}</h3>
      <h3>{user.lastName}</h3>
      <UserFavoriteAnimals favAnimals={user.favAnimals} />
    </div>
  );
}

export default App;*/
//Exercice03:
/*
import React from 'react';
import Exercise from './Exercise3';

function App() {
  return (
    <div>
      <Exercise />
    </div>
  );
}

export default App;*/


//daily_challenge:
import React from 'react';
import ImageCarousel from './components/ImageCarousel';

function App() {
  return (
    <div style={{ maxWidth: '600px', margin: '20px auto' }}>
      <ImageCarousel />
    </div>
  );
}

export default App;


