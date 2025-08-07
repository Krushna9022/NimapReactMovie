import React, { useEffect, useState } from "react";
import { fetchMovies } from "../api";
import MovieCard from "../components/MovieCard";

export default function MovieList({ type }) {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchMovies(type, page)
      .then((res) => {
        setMovies(res.data.results);
        setTotalPages(res.data.total_pages);
      })
      .finally(() => setLoading(false));
  }, [type, page]);

  return (
    <div className="container my-4">
      {loading ? (
        <h4 className="text-center">Loading...</h4>
      ) : (
        <>
          <div className="row justify-content-center">
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
          <div className="d-flex justify-content-center mt-4 gap-3">
            <button
              className="btn btn-outline-primary"
              disabled={page === 1}
              onClick={() => setPage((prev) => prev - 1)}
            >
              Previous
            </button>
            <span className="align-self-center">Page {page}</span>
            <button
              className="btn btn-outline-primary"
              disabled={page >= totalPages}
              onClick={() => setPage((prev) => prev + 1)}
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
}

