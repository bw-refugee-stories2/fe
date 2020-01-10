import React, { useEffect, useState } from 'react';
import {Route, Redirect} from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import StoriesReview from './components/StoriesReview';
import NavBar from './components/Nav';
import SubmitStory from './components/SubmitStory';
import StoryCard from './components/StoryCard';
import StoryReviewCard from './components/StoriesReviewCards';
import SingleStory from './components/SingleStory';
import { axiosWithAuth } from './axiosWithAuth';
import axios from 'axios';
import {StoriesContext} from './contexts/StoriesContext';


export default function App() {

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
  const [data, setData] =useState([]);
   useEffect(() => {
    axios.get("https://refugee-stories2.herokuapp.com/api/stories")
    .then(response => {
        setData(response.data)
        console.log(data);
    })

   }, [])


  return (
    <StoriesContext.Provider value={data}>
      <div className="App">
        <NavBar />
        <Route exact path ="/" component={Home}/>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/submit" component={SubmitStory} />
        <Route path="/stories/:id" component={SingleStory} />
        <PrivateRoute exact path="/storiesreview" component={StoriesReview} />

      </div>
    </StoriesContext.Provider>
  );
}
