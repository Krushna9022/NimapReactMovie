import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieDetails, fetchMovieCast } from "../api";

export default function MovieDetail() {
  const { id } = useParams();
  const [details, setDetails] = useState({});
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchMovieDetails(id).then((res) => setDetails(res.data));
    fetchMovieCast(id).then((res) => setCast(res.data.cast));
  }, [id]);

  return (
    <div className="container my-4">
      <h2 className="mb-3">{details.title}</h2>
      <div className="row">
        <div className="col-md-4">
          <img
            src={`https://image.tmdb.org/t/p/w500${details.poster_path}`}
            className="img-fluid"
            alt={details.title}
          />
        </div>
        <div className="col-md-8">
          <p>{details.overview}</p>
          <h5>Release Date: {details.release_date}</h5>
          <h5>Rating: {details.vote_average}</h5>
        </div>
      </div>
      <h3 className="mt-4">Cast</h3>
      <div className="row">
        {cast.slice(0, 10).map((member) => (
          <div className="col-6 col-md-3 text-center" key={member.cast_id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${member.profile_path}`}
              className="img-fluid rounded"
              alt={member.name}
            />
            <p className="mb-0">{member.name}</p>
            <small className="text-muted">{member.character}</small>
          </div>
        ))}
      </div>
    </div>
  );
}
