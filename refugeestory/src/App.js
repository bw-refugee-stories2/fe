import React, { useEffect, useState } from 'react';
import {Route} from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import HomeCarousel from './components/Carousel';
import Login from './components/Login';
import Nav from './components/Nav';
import SubmitStory from './components/SubmitStory';
import StoryCard from './components/StoryCard';
import StoryReviewCard from './components/PendingStoryCards';
import { axiosWithAuth } from './axiosWithAuth';
import axios from 'axios';


// function App() {
//   const [stories, setStories] = useState([]);
//   useEffect(()=>{
//     axios
//         .get('https://bw-refugee-stories-2.herokuapp.com/api/stories')
//         .then(response=>setStories(response.data))
//         .catch(error=>console.log(error));
// },[]);

  return (
    <div className="App">
      <Nav />
      <Route exact path ="/"/>
      <Route path="/login" component={Login} />
      <Route path="/submit" component={SubmitStory} />

      <HomeCarousel />
      <StoryReviewCard />
      <StoryCard />
    </div>
  );


export default App;
