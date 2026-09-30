export default function Register() {
  return (
    <>
      <div className="container mt-5 mb-5 pt-5">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8 col-12"></div>

          <div className="booking bg-white p-5 rounded shadow">
            <h3 className="mb-4 text-center">Добави нов филм</h3>

            <form
              className="booking-form row"
              role="form"
              action="#"
              method="post"
            >
              {/* Поле за Заглавие */}
              <div className="col-lg-6 col-12">
                <label htmlFor="title" className="form-label">
                  Заглавие
                </label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  className="form-control"
                  placeholder="Име на филма"
                  required
                />
              </div>

              {/* Поле за Година */}
              <div className="col-lg-6 col-12">
                <label htmlFor="year" className="form-label">
                  Година на издаване
                </label>
                <input
                  type="number"
                  name="year"
                  id="year"
                  className="form-control"
                  placeholder="Напр. 2024"
                  required
                />
              </div>

              {/* Поле за Жанр */}
              <div className="col-lg-6 col-12">
                <label htmlFor="genre" className="form-label">
                  Жанр
                </label>
                <input
                  type="text"
                  name="genre"
                  id="genre"
                  className="form-control"
                  placeholder="Екшън, Драма, Комедия..."
                  required
                />
              </div>

              {/* Поле за Снимка (URL) */}
              <div className="col-lg-6 col-12">
                <label htmlFor="imageUrl" className="form-label">
                  Постер (URL адрес)
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

              {/* Поле за Описание */}
              <div className="col-12">
                <label htmlFor="description" className="form-label">
                  Описание / Резюме
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

              {/* Бутон за запазване */}
              <div className="col-lg-4 col-12 ms-auto mt-3">
                <button type="submit" className="form-control">
                  Създай филм
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
