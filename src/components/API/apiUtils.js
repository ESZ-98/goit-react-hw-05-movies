const API_KEY = 'cd3c88333e478bf54694c32e9f22b41d';
const API_TRENDING = (pageValue = 1) => `trending/movie/day?api_key=${API_KEY}`;
const API_SEARCH = (name = '', pageValue = 1) =>
  `search/movie?api_key=${API_KEY}&language=en-US&query=${name}&page=${pageValue}`;
const API_ID = id => `movie/${id}?api_key=${API_KEY}`;
const API_CREDITS = id =>
  `movie/${id}/credits?api_key=${API_KEY}&language=en-US`;
const API_REVIEWS = id =>
  `movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`;

const apiUtils = {
  API_KEY,
  API_TRENDING,
  API_SEARCH,
  API_ID,
  API_CREDITS,
  API_REVIEWS,
};

export default apiUtils;
