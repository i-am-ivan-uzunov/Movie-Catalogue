export default function AddMovie() {
  return (
    <>
      <div className="container mt-5 mb-5 pt-5">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8 col-12"></div>

          <div className="booking bg-white p-5 rounded shadow">
            <h3 className="mb-4 text-center">Add Movie</h3>

            <form
              className="booking-form row"
              role="form"
              action="#"
              method="post"
            >
              <div className="col-lg-6 col-12">
                <label htmlFor="title" className="form-label">
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  className="form-control"
                  placeholder="Movie title"
                  required
                />
              </div>

              <div className="col-lg-6 col-12">
                <label htmlFor="year" className="form-label">
                  Year
                </label>
                <input
                  type="number"
                  name="year"
                  id="year"
                  className="form-control"
                  placeholder="ex. 2024"
                  required
                />
              </div>

              <div className="col-lg-6 col-12">
                <label htmlFor="genre" className="form-label">
                  Genre
                </label>
                <input
                  type="text"
                  name="genre"
                  id="genre"
                  className="form-control"
                  placeholder="Action, Drama, Comedy..."
                  required
                />
              </div>

              <div className="col-lg-6 col-12">
                <label htmlFor="imageUrl" className="form-label">
                  Poster (URL)
                </label>
                <input
                  type="url"
                  name="imageUrl"
                  id="imageUrl"
                  className="form-control"
                  placeholder="https://..."
                  required
                />
              </div>

              <div className="col-12">
                <label htmlFor="description" className="form-label">
                  Description / Resume
                </label>
                <textarea
                  className="form-control"
                  rows="4"
                  id="description"
                  name="description"
                  placeholder="Кратко резюме на сюжета..."
                  required
                ></textarea>
              </div>

              <div className="col-lg-4 col-12 ms-auto mt-3">
                <button type="submit" className="form-control">
                  Add Movie
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
