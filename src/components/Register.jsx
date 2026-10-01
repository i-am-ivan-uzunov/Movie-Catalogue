export default function Register() {
  return (
    <>
      <div className="container mt-5 mb-5 pt-5">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8 col-12">
            <div className="booking bg-white p-5 rounded shadow">
              <h3 className="mb-4 text-center">Registration</h3>

              <form
                className="booking-form row"
                role="form"
                action="#"
                method="post"
              >
                <div className="col-lg-6 col-12">
                  <label htmlFor="firstName" className="form-label">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    className="form-control"
                    placeholder="First name"
                    required
                  />
                </div>

                <div className="col-lg-6 col-12">
                  <label htmlFor="lastName" className="form-label">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    className="form-control"
                    placeholder="Last name"
                    required
                  />
                </div>

                <div className="col-lg-6 col-12">
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

                <div className="col-lg-6 col-12">
                  <label htmlFor="imageUrl" className="form-label">
                    Profile picture
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

                <div className="col-lg-6 col-12">
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

                <div className="col-lg-6 col-12">
                  <label htmlFor="repass" className="form-label">
                    Confirm Password
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

                <div className="col-lg-4 col-12 ms-auto mt-3">
                  <button type="submit" className="form-control">
                    Register
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
