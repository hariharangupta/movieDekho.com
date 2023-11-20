import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies, getAllShows } from "../../features/Movies/MovieSlicer";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieListing.scss";
import Slider from "react-slick";
import { settings } from "../../common/Setting";

const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);
  let renderMovies,
    renderShows = "";

  renderMovies = movies?.Search?.map((movie, index) => (
    <MovieCard data={movie} key={index} />
  ));

  renderShows = shows?.Search?.map((show, index) => (
    <MovieCard data={show} key={index} />
  ));

  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">
          <Slider {...settings}>{renderMovies}</Slider>
        </div>
      </div>
      <div className="show-list">
        <h2>Shows</h2>
        <div className="movie-container">
          {" "}
          <Slider {...settings}>{renderShows}</Slider>
        </div>
      </div>
    </div>
  );
};

export default MovieListing;
