import React, { useState } from "react";
import axios from 'axios';

const SubmitStory = (props) => {
  const [story, setStory] = useState({});

  const submitStory = event => {
      event.preventDefault();
      console.log(story);
      axios.post("https://bw-refugee-stories-2.herokuapp.com/api/stories", story)
      .then(response => {
          console.log(response.data)
          props.history.push('/');
      })
  }

  const handleChange = event => {
      setStory({
          ...story,
          [event.target.name]: event.target.value
    })
    console.log(story);
  }

    return (
        <>
        <h1> Submit your story here!</h1>
    <div className="container">
        <div className="box">
          <form onSubmit={submitStory} >
          <h6> Name: </h6>
            <input
                label="name"
                placeholder="name"
                name="name"
                type="text"
                onChange={handleChange}
            />
            <h6> Quote: </h6>
            <input
                label="quote"
                placeholder="quote"
                name="quote"
                type="text"
                onChange={handleChange}
            />
            <h6> Image URL:</h6>
            <input
                label="image_URL"
                placeholder="image URL"
                name="image_URL"
                type="text"
                onChange={handleChange}
            />
            <h6> Story: </h6>
            <textarea
                type= "text"
                label="content"
                placeholder="story"
                name="content"
                onChange={handleChange}
            />



            <button> Submit </button>
            </form>
        </div>
    </div>
    </>

    )
};

export default SubmitStory;
