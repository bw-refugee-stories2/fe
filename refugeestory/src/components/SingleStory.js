import React, { useContext } from "react";
// Components
import StoryCard from "./StoryCard";
// .Context.
import {StoriesContext} from "../contexts/StoriesContext";


export default function SingleStory(props) {
    const myData = useContext(StoriesContext).filter(element => (
        element.approved === true
    ));


  return (

    <section className="stories">
        <StoryCard singleStory ={props.location.state.singleStory[0]} size={"90%"}/>
    </section>
  );
}

