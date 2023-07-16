import { Route, Routes } from 'react-router-dom';
import React, { useEffect, useState, useCallback, lazy } from 'react';
import SharedLayout from './SharedLayout/SharedLayout';
import { apiMovieLauncher } from './API/apiMovieLauncher';
import apiUtils from './API/apiUtils';

const Home = lazy(() => import('../pages/Home/Home'));
const Movies = lazy(() => import('../pages/Movies/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

const App = () => {
  const [trendList, setTrendList] = useState([]);
  const trendForSave = useCallback(async () => {
    try {
      const answer = await apiMovieLauncher(apiUtils.API_TRENDING());
      setTrendList(answer.data.results);
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    trendForSave();
  }, [trendForSave]);

  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home trendingList={trendList} />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Home trendingList={trendList} />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
