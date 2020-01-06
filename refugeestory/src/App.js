import React from 'react';
// import logo from './logo.svg';
import './App.css';
import HomeCarousel from './components/Carousel'
import Login from './components/Login'

function App() {
  return (
    <div className="App">
      <Login />
      <HomeCarousel />
    </div>
  );
}

export default App;
