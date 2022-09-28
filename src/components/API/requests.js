import env from 'react-dotenv';
const API_KEY = env.API_KEY;

const requests = {
  fetchPopular: `/movie/popular?api_key=${API_KEY}&language=en-US`,
  fetchPopularDesc: `/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&language=en-US`,
  fetchPopularAsce: `/discover/movie?sort_by=popularity.asc&api_key=${API_KEY}&language=en-US`,
  fetchRatingDesc: `/discover/movie?sort_by=vote_average.desc&api_key=${API_KEY}&language=en-US`,
  fetchRatingAsce: `/discover/movie?sort_by=vote_average.asc&api_key=${API_KEY}&language=en-US`,
  fetchReleaseDateDesc: `/discover/movie?sort_by=release_date.desc&region=US&with_release_type=3&api_key=${API_KEY}&language=en-US`,
  fetchReleaseDateAsce: `/discover/movie?sort_by=release_date.asc&region=US&with_release_type=3&api_key=${API_KEY}&language=en-US`,
  fetchTitleDesc: `/discover/movie?sort_by=original_title.desc&api_key=${API_KEY}&language=en-US`,
  fetchTitleAsce: `/discover/movie?sort_by=original_title.asc&api_key=${API_KEY}&language=en-US`,
};

export default requests;
