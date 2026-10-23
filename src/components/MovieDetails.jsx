import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { supabase } from "../supabaseClient";

export default function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMovie() {
      const { data, error } = await supabase
        .from("movies")
        .select("*")
        .eq("id", id)
        .single();

      if (!error && data) {
        setMovie(data);
      }
      
      setLoading(false);
    }

    fetchMovie();
  }, [id]);

  if (loading) {
    return (
      <div className="container mt-5 pt-5 text-center">
        <h2>Loading details...</h2>
      </div>
    );
  }

  if (!movie) {
    return (
      <div className="container mt-5 pt-5 text-center">
        <h2>Movie not found.</h2>
        <Link to="/catalogue" className="btn btn-danger mt-3">Back to Catalogue</Link>
      </div>
    );
  }

  return (
    <section className="about section-padding">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 col-12 mb-5 mb-lg-0">
            <img
              src={movie.imageUrl}
              className="img-fluid rounded shadow"
              alt={movie.title}
              style={{ width: "100%", maxHeight: "600px", objectFit: "cover" }}
            />
          </div>
          
          <div className="col-lg-6 col-12 ms-lg-auto text-start">
            <h2 className="mb-3">{movie.title}</h2>
            <h5 className="text-muted mb-4">{movie.year} | {movie.genre}</h5>
            <p className="lead mb-4">{movie.description}</p>
            
            <div className="mt-5 d-flex gap-3">
              <Link to="/catalogue" className="custom-btn btn btn-secondary">
                Back
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}