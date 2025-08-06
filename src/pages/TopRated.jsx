import React, { useEffect, useState } from "react";
import { fetchMovies } from "../api";
import MovieCard from "../components/MovieCard";

export default function MovieList({ type }) {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchMovies(type, page).then((res) => setMovies(res.data.results));
  }, [type, page]);

  return (
    <Container>
      <Row className="d-flex flex-wrap justify-content-center">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </Row>
    </Container>
  );
}
