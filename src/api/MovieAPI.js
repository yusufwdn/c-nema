import axios from "axios";

const apiKey = process.env.REACT_APP_APIKEY;
const baseUrl = process.env.REACT_APP_BASEURL;

export const getMovies = async () => {
  const movies = await axios.get(
    `${baseUrl}/movie/popular?api_key=${apiKey}&page=1`
  );

  return movies.data.results;
};

export const searchMovies = async (q) => {
  const search = await axios.get(
    `${baseUrl}/search/movie?api_key=${apiKey}&page=1&query=${q}`
  );

  return search.data;
};
