import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { supabase } from "../supabaseClient";
import { AuthContext } from "../contexts/AuthContext";

const GENRES = [
  "Action",
  "Adventure",
  "Animation",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Family",
  "Fantasy",
  "History",
  "Horror",
  "Music",
  "Mystery",
  "Romance",
  "Science Fiction",
  "Thriller",
  "War",
  "Western",
];

export default function EditMovie() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    title: "",
    year: "",
    genre: [],
    imageUrl: "",
    description: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMovie() {
      const { data, error } = await supabase
        .from("movies")
        .select("*")
        .eq("id", id)
        .single();

      if (error) {
        setMessage("Error loading movie: " + error.message);
      } else if (data) {
        // Превръщаме жанровете от string обратно в масив за чекбоксовете
        const genresArray = data.genre
          ? data.genre.split(", ").map((g) => g.trim())
          : [];

        setFormData({
          title: data.title || "",
          year: data.year || "",
          genre: genresArray,
          imageUrl: data.imageUrl || "",
          description: data.description || "",
        });
      }
      setLoading(false);
    }

    fetchMovie();
  }, [id]);

  const validate = (name, value) => {
    let errorMsg = "";

    if (name === "title" && value.trim().length < 2) {
      errorMsg = "Title must be at least 2 characters long.";
    }
    if (
      name === "year" &&
      (Number(value) < 1888 || Number(value) > new Date().getFullYear())
    ) {
      errorMsg = "Please enter a valid year.";
    }
    if (name === "genre" && value.length === 0) {
      errorMsg = "Please select at least one genre.";
    }
    if (name === "imageUrl" && !/^https?:\/\/.+/.test(value)) {
      errorMsg =
        "Please enter a valid URL (starting with http:// or https://).";
    }
    if (name === "description" && value.trim().length < 10) {
      errorMsg = "Description must be at least 10 characters long.";
    }

    return errorMsg;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    setTouched({
      ...touched,
      [name]: true,
    });

    setErrors({
      ...errors,
      [name]: validate(name, value),
    });
  };

  const handleGenreChange = (e) => {
    const { value, checked } = e.target;
    let updatedGenres = [...formData.genre];

    if (checked) {
      updatedGenres.push(value);
    } else {
      updatedGenres = updatedGenres.filter((g) => g !== value);
    }

    setFormData({
      ...formData,
      genre: updatedGenres,
    });

    setTouched({
      ...touched,
      genre: true,
    });

    setErrors({
      ...errors,
      genre: validate("genre", updatedGenres),
    });
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;

    setTouched({
      ...touched,
      [name]: true,
    });

    setErrors({
      ...errors,
      [name]: validate(name, value),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    let isValid = true;

    Object.keys(formData).forEach((key) => {
      const error = validate(key, formData[key]);
      if (error) {
        newErrors[key] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);

    const allTouched = {};
    Object.keys(formData).forEach((key) => {
      allTouched[key] = true;
    });
    setTouched(allTouched);

    if (!isValid) return;

    const { error } = await supabase
      .from("movies")
      .update({
        title: formData.title,
        year: parseInt(formData.year),
        genre: formData.genre.join(", "),
        imageUrl: formData.imageUrl,
        description: formData.description,
      })
      .eq("id", id);

    if (error) {
      setMessage("Error updating movie: " + error.message);
    } else {
      navigate(`/movies/${id}`);
    }
  };

  if (loading) {
    return (
      <div className="container mt-5 text-center text-white pt-5">
        <h4>Loading movie details...</h4>
      </div>
    );
  }

  return (
    <div className="container mt-5 mb-5 pt-5">
      <div className="row justify-content-center">
        <div className="col-lg-8 col-12">
          <div className="bg-dark p-5 rounded shadow-lg border border-secondary">
            <h3 className="mb-4 text-center text-white fw-bold">Edit Movie</h3>

            {message && (
              <div className="alert alert-danger text-center" role="alert">
                {message}
              </div>
            )}

            <form
              className="booking-form row"
              onSubmit={handleSubmit}
              noValidate
            >
              <div className="col-lg-6 col-12 mb-3">
                <label htmlFor="title" className="form-label text-white">
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  className={`form-control ${touched.title && errors.title ? "is-invalid" : ""}`}
                  placeholder="Movie title"
                  value={formData.title}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.title && errors.title && (
                  <div className="invalid-feedback">{errors.title}</div>
                )}
              </div>

              <div className="col-lg-6 col-12 mb-3">
                <label htmlFor="year" className="form-label text-white">
                  Year
                </label>
                <input
                  type="number"
                  name="year"
                  id="year"
                  className={`form-control ${touched.year && errors.year ? "is-invalid" : ""}`}
                  placeholder="ex. 2024"
                  value={formData.year}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.year && errors.year && (
                  <div className="invalid-feedback">{errors.year}</div>
                )}
              </div>

              <div className="col-12 mb-3">
                <label className="form-label text-white">Genre</label>
                <div
                  className={`d-flex flex-wrap gap-3 p-3 rounded shadow-sm ${
                    touched.genre && errors.genre
                      ? "border border-danger"
                      : "border border-secondary"
                  }`}
                  style={{ backgroundColor: "#252525" }}
                >
                  {GENRES.map((genreItem) => (
                    <div className="form-check text-white" key={genreItem}>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id={`genre-${genreItem}`}
                        value={genreItem}
                        checked={formData.genre.includes(genreItem)}
                        onChange={handleGenreChange}
                        style={{ cursor: "pointer" }}
                      />
                      <label
                        className="form-check-label text-white"
                        htmlFor={`genre-${genreItem}`}
                        style={{ cursor: "pointer" }}
                      >
                        {genreItem}
                      </label>
                    </div>
                  ))}
                </div>
                {touched.genre && errors.genre && (
                  <div className="text-danger small mt-1">{errors.genre}</div>
                )}
              </div>

              <div className="col-12 mb-3">
                <label htmlFor="imageUrl" className="form-label text-white">
                  Poster (URL)
                </label>
                <input
                  type="url"
                  name="imageUrl"
                  id="imageUrl"
                  className={`form-control ${touched.imageUrl && errors.imageUrl ? "is-invalid" : ""}`}
                  placeholder="https://..."
                  value={formData.imageUrl}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.imageUrl && errors.imageUrl && (
                  <div className="invalid-feedback">{errors.imageUrl}</div>
                )}
              </div>

              <div className="col-12 mb-3">
                <label htmlFor="description" className="form-label text-white">
                  Description / Resume
                </label>
                <textarea
                  className={`form-control ${touched.description && errors.description ? "is-invalid" : ""}`}
                  rows="4"
                  id="description"
                  name="description"
                  placeholder="Brief summary of the plot..."
                  value={formData.description}
                  onChange={handleChange}
                  onBlur={handleBlur}
                ></textarea>
                {touched.description && errors.description && (
                  <div className="invalid-feedback">{errors.description}</div>
                )}
              </div>

              <div className="col-lg-4 col-12 ms-auto mt-3">
                <button
                  type="submit"
                  className="btn btn-warning text-dark fw-bold w-100 py-2"
                >
                  Edit Movie
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
