import "./App.css";

import { useEffect, useState } from "react";

import { getMovies, searchMovies } from "./api/MovieAPI";
import MovieWrapper from "./components/MovieWrapper";

const App = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    getMovies().then((results) => {
      setPopularMovies(results);
    });
  }, []);

  const search = async (q) => {
    if (q.length > 3) {
      const query = await searchMovies(q);
      setPopularMovies(query.results);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>C-Nema</h1>
        <input
          placeholder="Cari film"
          className="movie-search"
          onChange={({ target }) => search(target.value)}
        />
        <div className="movie-container">
          <MovieWrapper popularMovies={popularMovies} />
        </div>
      </header>
    </div>
  );
};

export default App;
