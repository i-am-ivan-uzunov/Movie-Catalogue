import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../supabaseClient";

export default function MovieCatalogue() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMovies() {
      const { data, error } = await supabase
        .from("movies")
        .select("*")
        .order("id", { ascending: false });

      if (!error && data) {
        setMovies(data);
      }
      setLoading(false);
    }

    fetchMovies();
  }, []);

  return (
    <div className="container mt-5 mb-5 pt-5">
      <h2 className="text-center mb-5 fw-bold text-white">Movie Catalogue</h2>

      {loading ? (
        <div className="text-center text-white">
          <h4>Loading movies...</h4>
        </div>
      ) : movies.length === 0 ? (
        <div className="text-center text-white">
          <p className="lead">No movies found in the catalogue.</p>
          <Link
            to="/add-movie"
            className="btn btn-warning text-dark fw-bold mt-3"
          >
            Add the first movie
          </Link>
        </div>
      ) : (
        <div className="row justify-content-center">
          {movies.map((movie) => (
            <div key={movie.id} className="col-lg-4 col-md-6 col-12 mb-4">
              <div className="card h-100 border-0 bg-dark shadow">
                <div className="position-relative">
                  <img
                    src={
                      movie.imageUrl ||
                      "https://via.placeholder.com/400x600?text=No+Image"
                    }
                    className="card-img-top"
                    alt={movie.title}
                    style={{ height: "400px", objectFit: "cover" }}
                    onError={(e) => {
                      e.target.src =
                        "https://via.placeholder.com/400x600?text=No+Image";
                    }}
                  />
                  <span className="badge bg-warning text-dark position-absolute top-0 end-0 m-3 fs-6 shadow">
                    {movie.genre}
                  </span>
                </div>

                <div className="card-body d-flex flex-column text-start p-4">
                  <div className="d-flex justify-content-between align-items-start mb-3">
                    <h4
                      className="card-title text-truncate mb-0 text-white"
                      style={{ maxWidth: "75%" }}
                      title={movie.title}
                    >
                      {movie.title}
                    </h4>
                    <span className="badge bg-secondary fs-6 shadow-sm">
                      {movie.year}
                    </span>
                  </div>

                  <div className="mt-auto pt-3">
                    <Link
                      to={`/movies/${movie.id}`}
                      className="btn btn-warning text-dark fw-bold w-100 py-2"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
