import { SEARCH_PODCAST, FETCH_PODCASTS } from './types';
import { listenNotesApi } from '../APIKey';

export const searchPodcast = text => dispatch => {
  dispatch({
    type: SEARCH_PODCAST,
    payload: text
  })
};

export const fetchPodcasts = text => dispatch => {
  listenNotesApi.get(
    `/typeahead?q=${text}&show_podcasts=1`,
  )
    .then(response => dispatch({
      type: FETCH_PODCASTS,
      payload: response.data,
    }))
    .catch(err => console.log(err))
}

