import env from 'react-dotenv';
const API_KEY = env.API_KEY;

const requests = {
  fetchPopular: `/movie/popular?api_key=${API_KEY}&language=en-US`,
  fetchPopularDesc: `/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&language=en-US`,
  fetchPopularAsce: `/discover/movie?sort_by=popularity.asc&api_key=${API_KEY}&language=en-US`,
  fetchRatingDesc: `/discover/movie?sort_by=rating.desc&api_key=${API_KEY}&language=en-US`,
  fetchRatingAsce: `/discover/movie?sort_by=rating.asc&api_key=${API_KEY}&language=en-US`,
  fetchReleaseDateDesc: `/discover/movie?sort_by=release_date.desc&api_key=${API_KEY}&language=en-US`,
  fetchReleaseDateAsce: `/discover/movie?sort_by=release_date.asc&api_key=${API_KEY}&language=en-US`,
  fetchTitleDesc: `/discover/movie?sort_by=title.desc&api_key=${API_KEY}&language=en-US`,
  fetchTitleAsce: `/discover/movie?sort_by=title.asc&api_key=${API_KEY}&language=en-US`,
};

export default requests;
