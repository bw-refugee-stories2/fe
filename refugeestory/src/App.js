import React, { useEffect, useState } from 'react';
import {Route, Redirect} from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import HomeCarousel from './components/Carousel';
import Login from './components/Login';
import SignUp from './components/SignUp';
import StoriesReview from './components/StoriesReview';
import NavBar from './components/Nav';
import SubmitStory from './components/SubmitStory';
import StoryCard from './components/StoryCard';
import StoryReviewCard from './components/StoriesReviewCards';
import { axiosWithAuth } from './axiosWithAuth';
import axios from 'axios';
import Stories from "./components/Stories";
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
    axios.get("https://bw-refugee-stories-2.herokuapp.com/api/stories")
    .then(response => {
        setData(response.data)
        console.log(data);
    })

   }, [])


// function App() {
//   const [stories, setStories] = useState([]);
//   useEffect(()=>{
//     axios
//         .get('https://bw-refugee-stories-2.herokuapp.com/api/stories')
//         .then(response=>setStories(response.data))
//         .catch(error=>console.log(error));
// },[]);

  return (
    <StoriesContext.Provider value={data}>
      <div className="App">
        <NavBar />
        <Route exact path ="/"/>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/submit" component={SubmitStory} />
        <PrivateRoute exact path="/storiesreview" component={StoriesReview} />
        <HomeCarousel />
        <Stories />

      </div>
    </StoriesContext.Provider>
  );
}
