import React from 'react';
import {Route} from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import HomeCarousel from './components/Carousel';
import Login from './components/Login';
import Nav from './components/Nav';
import SubmitStory from './components/SubmitStory';



function App() {
  return (
    <div className="App">
      <Nav />
      <Route exact path ="/"/>
      <Route path="/login" component={Login} />
      <Route path="/submit" component={SubmitStory} />
      <HomeCarousel />
    </div>
  );
}

export default App;
