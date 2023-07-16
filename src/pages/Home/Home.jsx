import React from 'react';
import MovieList from 'components/MovieList/MovieList';
import PropTypes from 'prop-types';
import css from './Home.module.css';

const Home = ({ trendingList }) => {
  return (
    <div className={css.home}>
      <h2>Trending today</h2>
      {<MovieList movieList={trendingList} />}
    </div>
  );
};

Home.propTypes = {
  trendingList: PropTypes.array(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
      name: PropTypes.string,
    }),
  ),
};

export default Home;
