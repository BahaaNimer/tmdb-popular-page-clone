import axios from 'axios';

// base url to make request to the movie database
const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  validateStatus: (status) => status >= 200 && status < 300,
});

export default instance;
