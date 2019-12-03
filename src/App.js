import React from 'react';
import { useState } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Routes from './components/Routes';

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  return (
    <div className='App'>
      <Navigation />
      <Routes isLoggedIn={isLoggedIn} />
      <button
        onClick={() => {
          setLoggedIn(prevState => !prevState);
        }}
      >
        {isLoggedIn ? 'Logout from private routes' : 'Login to private routes'}
      </button>
    </div>
  );
}

export default App;
