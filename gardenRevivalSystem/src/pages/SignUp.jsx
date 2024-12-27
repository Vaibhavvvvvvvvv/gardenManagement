import React from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate('/login');
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <button onClick={handleSignUp}>Sign Up</button>
    </div>
  );
};

export default SignUp;
