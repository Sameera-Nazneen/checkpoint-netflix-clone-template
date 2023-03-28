import "./Banner.css";
import { useState, useEffect } from "react";
import axios from "axios";
import requests from "../../request";
import "./Banner.css";

const Banner = () => {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    let getData = async () => {
      let request = await axios.get(requests.fetchNetflixOriginals);
      // console.log(request);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ]
        );
      };
      getData();

  }, []);
  console.log();
  return (
    <header
    className="banner"
    style={{
      backgroundSize: "cover",
      backgroundImage: `url(" https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
      backgroundPosition: "50% 10%",
    }}
  >
    <div className="banner__contents">
      <h1 className="banner__title">
        {movie?.title || movie.name || movie?.original_name}
      </h1>
      <div className="banner__buttons">
        <button className="banner__button">PLAY</button>
        <button className="banner__button">ADD TO LIST</button>
      </div>
      <h1 className="banner__description">{movie?.overview}</h1>
    </div>
    <div className="banner__fadeBottom" />
  </header>
  );
};

export default Banner;

