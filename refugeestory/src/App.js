import React from 'react';
// Components
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import StoriesReview from './components/StoriesReview';
import NavBar from './components/Nav';
import SubmitStory from './components/SubmitStory';
import SingleStory from './components/SingleStory';
//Utils
import PrivateRoute from "./utils/PrivateRoute";
import {withRouter, Route } from 'react-router-dom';
import { connect } from "react-redux";
import './App.css';



const App = props => {

  return (
    <div className = "App">
        <NavBar />
        <Route exact path ="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/submit" component={SubmitStory} />
        <Route path="/stories/:id" component={SingleStory} />
        <PrivateRoute exact path="/storiesreview" component={StoriesReview} />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    name: state.name,
    fetchingStories: state.fetchingStories,
    stories: state.stories,
    fetchingStoriesError: state.fetchingStoriesError
  };
};

export default withRouter(connect(mapStateToProps, {})(App));