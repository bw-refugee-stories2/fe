import {
    FETCHING_STORIES,
    SET_STORIES,
    FETCH_STORIES_ERROR,
    SET_INDEX,
    SET_ANIMATING,
    FETCHED_DATA
  } from "../actions/actions";
  
  const initialState = {
    name: "MaxiCB",
    fetchingStories: false,
    stories: [],
    fetchingStoriesError: "",
    fetchedData: false,
    index: 0,
    animating: false,
  };
  
  export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_STORIES:
        return {
          ...state,
          fetchingStories: !state.fetchingStories
        };
        case FETCHED_DATA:
        return {
          ...state,
          fetchedData: !state.fetchedData
        };
        case SET_STORIES:
        return {
          ...state,
          stories: action.payload
        };
        case FETCH_STORIES_ERROR:
        return {
          ...state,
          fetchingStoriesError: action.payload
        };
        case SET_INDEX:
        return {
            ...state,
            index: action.payload
        }
        case SET_ANIMATING:
        return {
            ...state,
            animating: action.payload
        }
      default:
        return state;
    }
  };