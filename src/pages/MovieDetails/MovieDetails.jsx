import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import AdditionalInfo from 'components/AdditionalInfo/AdditionalInfo';
import { apiMovieLauncher } from 'components/API/apiMovieLauncher';
import apiUtils from 'components/API/apiUtils';
import css from './MovieDetails.module.css';

const MovieDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const locationRef = useRef(location);

  const { movieId } = useParams();
  const [movieIdData, setMovieIdData] = useState('');
  const [movieIdDataDetails, setMovieIdDataDetails] = useState({});

  const dataMovieDetails = useCallback(async () => {
    try {
      const answer = await apiMovieLauncher(apiUtils.API_ID(movieId));
      setMovieIdData(answer.data.id);
      setMovieIdDataDetails(answer.data);
    } catch (err) {
      console.log(err);
    }
  }, [movieId]);

  const goBackButton = () => {
    if (locationRef.current.state?.from.pathname === '/') {
      return navigate('/');
    } else {
      return navigate(`/movies${locationRef.current.state.from?.search}`);
    }
  };

  useEffect(() => {
    if (movieId !== movieIdData) dataMovieDetails();
  }, [dataMovieDetails, movieId, movieIdData]);

  return (
    <div className={css.movie}>
      {movieIdData !== '' ? (
        <>
          <button type="button" onClick={() => goBackButton()}>
            Go back
          </button>
          <div className={css.movieItem}>
            <img
              className={css.movieImage}
              src={`https://image.tmdb.org/t/p/w500/${movieIdDataDetails.poster_path}`}
              alt={`${movieIdDataDetails.tagline}`}
            />
            <div>
              <h2>{movieIdDataDetails.original_title}</h2>
              <p>User score: {movieIdDataDetails.vote_average}</p>
              <h3>Overview</h3>
              <p>{movieIdDataDetails.overview}</p>
              <h3>Genres</h3>
              <p>
                {movieIdDataDetails.genres.map(({ _, name }) => `${name} `)}
              </p>
            </div>
          </div>
          <AdditionalInfo />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MovieDetails;
