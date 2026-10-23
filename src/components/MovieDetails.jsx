import { useState, useEffect, useContext } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { supabase } from "../supabaseClient";
import { AuthContext } from "../contexts/AuthContext";

export default function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchMovie() {
      try {
        const { data, error } = await supabase
          .from("movies")
          .select("*")
          .eq("id", id)
          .single();

        if (error) {
          console.error(error.message);
        } else if (data) {
          setMovie(data);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchMovie();
  }, [id]);

  const executeDelete = async () => {
    const { error } = await supabase.from("movies").delete().eq("id", id);

    if (error) {
      alert("Error deleting movie: " + error.message);
    } else {
      navigate("/catalogue");
    }
  };

  if (loading) {
    return (
      <div className="container mt-5 pt-5 text-center text-white">
        <h2 className="mt-5">Loading details...</h2>
      </div>
    );
  }

  if (!movie) {
    return (
      <div className="container mt-5 pt-5 text-center text-white">
        <h2 className="mt-5">Movie not found.</h2>
        <Link
          to="/catalogue"
          className="btn btn-warning text-dark fw-bold mt-3"
        >
          Back to Catalogue
        </Link>
      </div>
    );
  }

  const isOwner = user && user.id === movie.owner_id;

  return (
    <>
      <div className="container mt-5 mb-5 pt-5">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="card shadow-lg border border-secondary bg-dark text-white overflow-hidden">
              <div className="row g-0">
                <div className="col-md-5 bg-black d-flex align-items-center justify-content-center">
                  <img
                    src={
                      movie.imageUrl ||
                      "https://via.placeholder.com/400x600?text=No+Image"
                    }
                    className="img-fluid w-100 h-100"
                    alt={movie.title}
                    style={{ objectFit: "cover", minHeight: "500px" }}
                    onError={(e) => {
                      e.target.src =
                        "https://via.placeholder.com/400x600?text=No+Image";
                    }}
                  />
                </div>
                <div className="col-md-7 d-flex flex-column">
                  <div className="card-body p-5">
                    <h2 className="card-title mb-3 text-white fw-bold">
                      {movie.title}
                    </h2>
                    <div className="mb-4">
                      <span className="badge bg-secondary fs-6 me-2 mb-2">
                        Year: {movie.year}
                      </span>
                      <span className="badge bg-warning text-dark fs-6 mb-2 fw-bold">
                        Genre: {movie.genre}
                      </span>
                    </div>
                    <h5 className="mb-3 text-white">Description:</h5>
                    <p className="card-text lead text-light">
                      {movie.description}
                    </p>
                  </div>

                  <div className="card-footer bg-dark border-0 p-5 pt-0 mt-auto d-flex gap-3 flex-wrap">
                    <Link
                      to="/catalogue"
                      className="btn btn-secondary px-4 py-2"
                    >
                      Back
                    </Link>

                    {isOwner && (
                      <>
                        <Link
                          to={`/movies/${movie.id}/edit`}
                          className="btn btn-warning text-dark fw-bold px-4 py-2"
                        >
                          Edit
                        </Link>
                        <button
                          onClick={() => setShowDeleteModal(true)}
                          className="btn btn-danger px-4 py-2"
                        >
                          Delete
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showDeleteModal && (
        <div
          className="modal show d-block"
          style={{ backgroundColor: "rgba(0,0,0,0.7)" }}
          tabIndex="-1"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content shadow-lg border border-secondary bg-dark text-white">
              <div className="modal-header border-0">
                <h5 className="modal-title text-warning fw-bold">
                  Delete Movie
                </h5>
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  onClick={() => setShowDeleteModal(false)}
                ></button>
              </div>
              <div className="modal-body text-center py-4">
                <p className="fs-5 mb-0 text-light">
                  Are you sure you want to delete{" "}
                  <strong className="text-white">{movie.title}</strong>?
                </p>
                <p className="text-muted mt-2 mb-0">
                  This action cannot be undone.
                </p>
              </div>
              <div className="modal-footer border-0 d-flex justify-content-center gap-2 pb-4">
                <button
                  type="button"
                  className="btn btn-secondary px-4"
                  onClick={() => setShowDeleteModal(false)}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-danger px-4"
                  onClick={executeDelete}
                >
                  Yes, Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
