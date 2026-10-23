import { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";

export default function MovieCatalogue() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMovies() {
      const { data, error } = await supabase.from("movies").select("*");

      if (!error && data) {
        setMovies(data);
      }

      setLoading(false);
    }

    fetchMovies();
  }, []);

  return (
    <section className="menu section-padding">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="text-center mb-lg-5 mb-4">Movie Catalogue</h2>
          </div>

          {loading && (
            <div className="col-12 text-center">
              <h4>Loading movies...</h4>
            </div>
          )}

          {!loading && movies.length === 0 && (
            <div className="col-12 text-center">
              <h4>No movies found. Please add some!</h4>
            </div>
          )}

          {!loading &&
            movies.map((movie) => (
              <div key={movie.id} className="col-lg-4 col-md-6 col-12 mb-4">
                <div className="menu-thumb">
                  <div className="menu-image-wrap">
                    <img
                      src={movie.imageUrl}
                      className="img-fluid menu-image"
                      alt={movie.title}
                      style={{
                        height: "450px",
                        objectFit: "cover",
                        width: "100%",
                      }}
                    />
                    <span className="menu-tag bg-warning">{movie.genre}</span>
                  </div>

                  <div className="menu-info d-flex flex-wrap align-items-center">
                    <h4 className="mb-0">{movie.title}</h4>
                    <span className="price-tag bg-white shadow-lg ms-4">
                      {movie.year}
                    </span>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
