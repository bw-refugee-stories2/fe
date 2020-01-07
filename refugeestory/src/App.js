import React, { useEffect, useState } from 'react';
import {Route} from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import HomeCarousel from './components/Carousel';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Nav from './components/Nav';
import SubmitStory from './components/SubmitStory';
import StoryCard from './components/StoryCard';
import StoryReviewCard from './components/PendingStoryCards';
import { axiosWithAuth } from './axiosWithAuth';
import axios from 'axios';


function App() {
  const [story, setStory] = useState([]);
  useEffect(() => {
    axios.get('https://bw-refugee-stories-2.herokuapp.com/api/stories')
    .then(res => {setStory(res.data.results)}, console.log(setStory))
    .catch(err => console.log(err))
  }, [])
  return (
    <div className="App">
      <Nav />
      <Route exact path ="/"/>
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
      <Route path="/submit" component={SubmitStory} />

      <HomeCarousel />
      <StoryReviewCard />
      <StoryCard />
    </div>
  );
}

export default App;
