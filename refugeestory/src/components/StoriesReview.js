import React from "react";
//Utils
import { connect } from "react-redux";
// Actions
import {
  fetchStories
} from "../actions/actions";

import StoriesReviewCards from "./StoriesReviewCards";
const StoriesReview = (props) => {
    const myData = props.stories.filter(element => (
        element.approved === false
    ));


  return (
    <section className="stories">
        <div className="box">
          <h1> Stories to Review</h1>
          {myData.map(story => {
            return <StoriesReviewCards singleStory={story} />
          })}
           </div>
    </section>
  );
};

const mapStateToProps = state => {
  return {
    stories: state.stories,
  };
};

export default connect(mapStateToProps, { 
  fetchStories 
})(StoriesReview);


