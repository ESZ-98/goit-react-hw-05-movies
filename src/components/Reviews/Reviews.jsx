import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { apiMovieLauncher } from '../API/apiMovieLauncher';
import apiUtils from '../API/apiUtils';

const Reviews = () => {
  const { movieId } = useParams();
  const [revData, setRevData] = useState([]);

  const reviewsData = useCallback(async () => {
    try {
      const answer = await apiMovieLauncher(apiUtils.API_REVIEWS(movieId));
      setRevData(answer.data.results);
    } catch (err) {
      console.log(err);
    }
  }, [movieId]);

  useEffect(() => reviewsData, [reviewsData]);

  return (
    <ul>
      {revData.length > 0 ? (
        revData.map(({ author, content, id }) => (
          <li key={id}>
            <h3>{author}</h3>
            <p>{content}</p>
          </li>
        ))
      ) : (
        <p>We don't have any reviews for this movie.</p>
      )}
    </ul>
  );
};

export default Reviews;
