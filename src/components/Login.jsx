export default function Login() {
  return (
    <div className="container mt-5 mb-5 pt-5">
      <div className="row justify-content-center">
        
        {/* По-тясна колона за по-добра визия при малко полета */}
        <div className="col-lg-5 col-md-7 col-12">
          <div className="booking bg-white p-5 rounded shadow">
            <h3 className="mb-4 text-center">Вход</h3>

            <form
              className="booking-form row"
              role="form"
              action="#"
              method="post"
            >
              {/* Поле за имейл */}
              <div className="col-12 mb-3">
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

              {/* Парола */}
              <div className="col-12 mb-4">
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

              {/* Бутон за вход */}
              <div className="col-12">
                <button type="submit" className="form-control">
                  Влез в профила
                </button>
              </div>
            </form>
          </div>
        </div>
        
      </div>
    </div>
  );
}
