export default function Login() {
  return (
    <div className="container mt-5 mb-5 pt-5">
      <div className="row justify-content-center">
        <div className="col-lg-5 col-md-7 col-12">
          <div className="booking bg-white p-5 rounded shadow">
            <h3 className="mb-4 text-center">Login</h3>

            <form
              className="booking-form row"
              role="form"
              action="#"
              method="post"
            >
              <div className="col-12 mb-3">
                <label htmlFor="email" className="form-label">
                  Email
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

              <div className="col-12 mb-4">
                <label htmlFor="password" className="form-label">
                  Password
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

              <div className="col-12">
                <button type="submit" className="form-control">
                  Log in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
