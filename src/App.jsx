import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppNavbar from "./components/Navbar";
import MovieList from "./pages/MovieList";
import MovieDetail from "./pages/MovieDetail";
import SearchResults from "./pages/SearchResults";

export default function App() {
  return (
    <Router>
      <AppNavbar />
      <Routes>
        <Route path="/" element={<MovieList type="popular" />} />
        <Route path="/top-rated" element={<MovieList type="top_rated" />} />
        <Route path="/upcoming" element={<MovieList type="upcoming" />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="/search/:query" element={<SearchResults />} />
      </Routes>
    </Router>
  );
}
