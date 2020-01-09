import React, {useState, useContext, useEffect} from "react";
import StoryCard from "./StoryCard";
import styled from "styled-components";
import axios from "axios";
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

