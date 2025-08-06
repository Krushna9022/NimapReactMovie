import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { searchMovies } from "../api";
import MovieCard from "../components/MovieCard";

export default function SearchResults() {
  const { query } = useParams();
  const [results, setResults] = useState([]);

  useEffect(() => {
    searchMovies(query).then((res) => setResults(res.data.results));
  }, [query]);

  return (
    <div className="container my-4">
      <h2 className="mb-3">Search Results for "{query}"</h2>
      <div className="row justify-content-center">
        {results.length > 0 ? (
          results.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))
        ) : (
          <h5>No results found.</h5>
        )}
      </div>
    </div>
  );
}
