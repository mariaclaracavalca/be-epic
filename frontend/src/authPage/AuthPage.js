import React, { useState } from 'react';
import Login from '../login/Login';     // Import corretto di Login
import Register from '../register/Register'; // Import corretto di Register

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin); 
  };

  return (
    <div className="auth-page">
      <h1>{isLogin ? 'Accedi' : 'Registrati'}</h1>
      
      {isLogin ? <Login /> : <Register />}
      
      <p>
        {isLogin ? 'Non hai un account?' : 'Hai già un account?'}
        <button onClick={toggleForm}>
          {isLogin ? 'Registrati qui' : 'Accedi qui'}
        </button>
      </p>
    </div>
  );
};

export default AuthPage;
