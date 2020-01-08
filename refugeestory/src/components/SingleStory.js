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


// Data.map(story=>{
//     return
// })
// return (
//     <section className="character-list grid-view">
//       {character.map(char => {
//         return <CharacterCard key={char.id} char={char} />;
//       })}
//     </section>
