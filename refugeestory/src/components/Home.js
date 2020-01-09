import React, { useEffect } from "react";
// Components
import HomeCarousel from "./Carousel";
import Stories from "./Stories";
//Utils
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
// Actions
import { setName, fetchStories } from "../actions/actions";

const Home = props => {
  const data = props.stories;
  const fetching = false;

  useEffect(() => {
    props.fetchStories();
  }, [fetching]);

  return (
    <div>
      <HomeCarousel myData={data} />
      <Stories myData={data} />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    name: state.name,
    fetchingStories: state.fetchingStories,
    stories: state.stories,
    fetchingStoriesError: state.fetchingStoriesError,
    fetchedData: state.fetchedData
  };
};

export default withRouter(
  connect(mapStateToProps, {
    setName,
    fetchStories
  })(Home)
);
