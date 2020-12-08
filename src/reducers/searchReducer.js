/* eslint-disable import/no-anonymous-default-export */
import { SEARCH_PODCAST, FETCH_PODCASTS } from '../actions/types';

const initialState = {
  text: '',
  podcasts: [],
  loading: false,
  podcast: []
}

export default function (state = initialState, action) {
  switch (action.type) {
    case SEARCH_PODCAST:
      return {
        ...state,
        text: action.payload,
        loading: false
      };
    case FETCH_PODCASTS:
      return {
        ...state,
        podcasts: action.payload,
      };
    default:
      return state
  }
}