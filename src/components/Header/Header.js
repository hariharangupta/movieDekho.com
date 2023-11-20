import React, { useState } from "react";
import movieLogo from "../../images/movie_logo.jpg";
import { Link } from "react-router-dom";

import "./Header.scss";
import { useSelector } from "react-redux";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
  getAllMovies,
} from "../../features/Movies/MovieSlicer";
import { useDispatch } from "react-redux";

const Header = () => {
  const movies = useSelector(getAllMovies);
  const [term, setTerm] = useState("");
  const dispatch = useDispatch();

  const movieText = "Harry";
  const showText = "Friends";

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(fetchAsyncMovies(term));
    dispatch(fetchAsyncShows(term));
    setTerm("");
  };

  return (
    <div className="header">
      <div className="logo">
        {" "}
        <Link
          to="/"
          onClick={() => {
            dispatch(fetchAsyncMovies(movieText));
            dispatch(fetchAsyncShows(showText));
          }}
        >
          Movie Dekho.com
        </Link>
      </div>
      <div className="search-bar">
        <form onSubmit={submitHandler}>
          <input
            type="text"
            value={term}
            placeholder="Search Movies or Shows"
            onChange={(e) => setTerm(e.target.value)}
          />
          <button
            disabled={term.length <= 0}
            className="fa fa-search"
            type="submit"
          ></button>
        </form>
      </div>
      <div className="user-image">
        <img src={movieLogo} alt="movie" />
      </div>
    </div>
  );
};

export default Header;
