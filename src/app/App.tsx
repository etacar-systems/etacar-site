import React from 'react';
import './App.scss';
import Header from '../components/Header/Header';
import Home from '../pages/Home';

function App() {
  return (
    <div className="wrapper">
      <Header/>
      <Home/>
    </div>
  );
}

export default App;
