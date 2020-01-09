import axios from "axios";
// Base URL
const baseUrl = "https://bw-refugee-stories-2.herokuapp.com/api/";

export const SET_NAME = "SET_NAME";
// Stories
export const FETCHING_STORIES = "FETCHING_STORIES";
export const SET_STORIES = "SET_STORIES";
export const FETCH_STORIES_ERROR = "FETCH_STORIES_ERROR";
export const FETCHED_DATA = "FETCHED_DATA";
// Carousel
export const SET_INDEX = "SET_INDEX";
export const SET_ANIMATING = "SET_ANIMATING";

export const setName = name => {
  return {
    type: SET_NAME,
    payload: name
  };
};

export const fetchStories = () => {
    const promise = axios.get(baseUrl + "stories")
    return dispatch => {
        dispatch({ type: FETCHING_STORIES});
        promise.then(response => {
            dispatch({ type: SET_STORIES, payload: response.data });
            dispatch({ type: FETCHED_DATA })
            dispatch({ type: FETCHING_STORIES });
        })
        .catch(err => {
            dispatch({type: FETCH_STORIES_ERROR, payload: err });
        })
    }
}

export const setIndex = index => {
    return {
        type: SET_INDEX,
        payload: index
    }
}

export const setAnimating = bool => {
    return {
        type: SET_ANIMATING,
        payload: bool
    }
}

