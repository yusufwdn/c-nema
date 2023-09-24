import React from "react";

export default function MovieWrapper({ popularMovies }) {
  return popularMovies.map((movie, key) => {
    return (
      <div className="movie-wrapper" key={key}>
        <div className="movie-title">{movie.title}</div>
        <img
          className="movie-image"
          src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`}
        />
        <div className="movie-date">{movie.release_date}</div>
        <div className="movie-rate">{movie.vote_average}</div>
      </div>
    );
  });
}
