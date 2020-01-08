import React, { useState, useContext } from "react";
import { axiosWithAuth } from "../axiosWithAuth";
import StoriesReviewCards from "./StoriesReviewCards";
import {StoriesContext} from "../contexts/StoriesContext";
const StoriesReview = (props) => {
    const myData = useContext(StoriesContext).filter(element => (
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

export default StoriesReview;

