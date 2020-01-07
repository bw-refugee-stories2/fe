import React, { useEffect, useState } from 'react';
import {Route, Redirect} from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import HomeCarousel from './components/Carousel';
import Login from './components/Login';
import SignUp from './components/SignUp';
import StoriesReview from './components/StoriesReview';
import Nav from './components/Nav';
import SubmitStory from './components/SubmitStory';
import StoryCard from './components/StoryCard';
import StoryReviewCard from './components/PendingStoryCards';
import { axiosWithAuth } from './axiosWithAuth';
import axios from 'axios';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      localStorage.getItem("token") ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);


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
      <Route path="/signup" component={SignUp} />
      <Route path="/submit" component={SubmitStory} />
      <PrivateRoute exact path="/storiesreview" component={StoriesReview} />

      <HomeCarousel />
      <StoryReviewCard />
      <StoryCard />
    </div>
  );


export default App;
