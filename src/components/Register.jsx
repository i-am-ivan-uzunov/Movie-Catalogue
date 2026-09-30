export default function Register() {
  return (
    <>
      <div className="container mt-5 mb-5 pt-5">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8 col-12">
            <div className="booking bg-white p-5 rounded shadow">
              <h3 className="mb-4 text-center">Регистрация</h3>

              <form
                className="booking-form row"
                role="form"
                action="#"
                method="post"
              >
                {/* Поле за име */}
                <div className="col-lg-6 col-12">
                  <label htmlFor="firstName" className="form-label">
                    Име
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    className="form-control"
                    placeholder="Име"
                    required
                  />
                </div>

                {/* Поле за фамилия */}
                <div className="col-lg-6 col-12">
                  <label htmlFor="lastName" className="form-label">
                    Фамилия
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    className="form-control"
                    placeholder="Фамилия"
                    required
                  />
                </div>

                {/* Поле за имейл */}
                <div className="col-lg-6 col-12">
                  <label htmlFor="email" className="form-label">
                    Имейл
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="form-control"
                    placeholder="your@email.com"
                    required
                  />
                </div>

                {/* Поле за Снимка (URL) */}
                <div className="col-lg-6 col-12">
                  <label htmlFor="imageUrl" className="form-label">
                    Профилна снимка (URL адрес)
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

                {/* Парола */}
                <div className="col-lg-6 col-12">
                  <label htmlFor="password" className="form-label">
                    Парола
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="form-control"
                    placeholder="******"
                    required
                  />
                </div>

                {/* Повторна парола */}
                <div className="col-lg-6 col-12">
                  <label htmlFor="repass" className="form-label">
                    Повтори парола
                  </label>
                  <input
                    type="password"
                    name="repass"
                    id="repass"
                    className="form-control"
                    placeholder="******"
                    required
                  />
                </div>

                {/* Бутон за запазване */}
                <div className="col-lg-4 col-12 ms-auto mt-3">
                  <button type="submit" className="form-control">
                    Регистрация
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
