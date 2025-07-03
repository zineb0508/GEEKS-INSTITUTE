import React from 'react';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../features/auth/authSlice';

const Logout = () => {
  const dispatch = useDispatch();

  return (
    <button onClick={() => dispatch(logoutUser())}>
      Logout
    </button>
  );
};

export default Logout;
