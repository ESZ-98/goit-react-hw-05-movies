import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { apiMovieLauncher } from '../API/apiMovieLauncher';
import apiUtils from '../API/apiUtils';
import css from './Cast.module.css';

const Cast = () => {
  const { movieId } = useParams();

  const [castData, setCastData] = useState([]);
  const creditsData = useCallback(async () => {
    try {
      const answer = await apiMovieLauncher(apiUtils.API_CREDITS(movieId));
      setCastData(answer.data.cast);
    } catch (err) {
      console.log(err);
    }
  }, [movieId]);

  useEffect(() => {
    creditsData();
  }, [creditsData]);

  return (
    <ul className={css.cast}>
      {castData.map(({ character, id, name, profile_path }) => (
        <li key={id} className={css.castItem}>
          {' '}
          <img
            src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
            alt={`Photograph of ${name}`}
            className={css.castImage}
          />
          <p className={css.castBullet}>{name}</p>
          <p>Character: {character}</p>
        </li>
      ))}
    </ul>
  );
};

export default Cast;
