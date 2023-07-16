import React, { useState, useEffect, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import MovieList from 'components/MovieList/MovieList';
import { apiMovieLauncher } from 'components/API/apiMovieLauncher';
import apiUtils from 'components/API/apiUtils';
import css from './Movies.module.css';

const Movies = () => {
  const [searchList, setSearchList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const searchForSave = useCallback(async input => {
    try {
      const answer = await apiMovieLauncher(apiUtils.API_SEARCH(input));
      setSearchList(answer.data.results);
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    if (searchParams.get('querry')?.length > 0)
      searchForSave(searchParams.get('querry'));
  }, [searchParams, searchForSave]);

  return (
    <div className={css.movies}>
      <form
        onSubmit={event => {
          event.preventDefault();
          setSearchParams({ querry: event.target[0].value });
        }}
      >
        <input type="text" name="querry" />
        <button type="submit">Search</button>
      </form>
      <MovieList movieList={searchList} />
    </div>
  );
};

export default Movies;
