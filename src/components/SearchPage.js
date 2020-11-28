import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import PodcastList from './PodcastList';

const SearchPage = (props) => {
  const [input, setInput] = useState('');
  const [podcastListDefault, setPodcastListDefault] = useState();
  const [podcastList, setPodcastList] = useState();

  const fetchData = async () => {
    return await fetch('https://listen-api.listennotes.com/api/v2/search?sort_by_date=0&type=episode&offset=0&len_min=10&len_max=30&genre_ids=68%2C82&published_before=1580172454000&published_after=0&only_in=title%2Cdescription&language=English&safe_mode=0', {
      headers: {
        'X-ListenAPI-Key': process.env.REACT_APP_LISTEN_NOTES_API_KEY
      }
    })
      .then(response => response.json())
      .then(data => {
        setPodcastList(data)
        setPodcastListDefault(data)
      });
  }

  const updateInput = async (input) => {
    const filtered = podcastListDefault.filter(podcast => {
      return podcast.name.toLowerCase().includes(input.toLowerCase())
    })
    setInput(input);
    setPodcastList(filtered);
  }

  useEffect(() => { fetchData() }, []);

  return (
    <>
      <h1>Podcast List</h1>
      <SearchBar
        input={input}
        onChange={updateInput}
      />
      <PodcastList podcastList={podcastList} />
    </>
  );
}

export default SearchPage