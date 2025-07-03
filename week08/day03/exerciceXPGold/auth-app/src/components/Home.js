import React from 'react';
import { useSelector } from 'react-redux';
import Login from './Login';
import Logout from './Logout';

const Home = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);

  return (
    <div>
      <h1>Welcome to the App</h1>
      {isAuthenticated ? (
        <div>
          <h2>Hello, {user.username}!</h2>
          <Logout />
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default Home;
