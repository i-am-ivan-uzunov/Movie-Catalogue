import { useState } from "react";
import { supabase } from "../supabaseClient";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [message, setMessage] = useState("");

  const validate = (name, value) => {
    let errorMsg = "";

    if (name === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      errorMsg = "Please enter a valid email address.";
    }
    if (name === "password" && value.length < 6) {
      errorMsg = "Password must be at least 6 characters long.";
    }

    return errorMsg;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setTouched({ ...touched, [name]: true });
    setErrors({ ...errors, [name]: validate(name, value) });
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched({ ...touched, [name]: true });
    setErrors({ ...errors, [name]: validate(name, value) });
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

    const { error } = await supabase.auth.signInWithPassword({
      email: formData.email,
      password: formData.password,
    });

    if (error) {
      setMessage("Login failed: " + error.message);
    } else {
      setMessage("Login successful!");
      setFormData({ email: "", password: "" });
      setTouched({});
      setErrors({});
    }
  };

  return (
    <div className="container mt-5 mb-5 pt-5">
      <div className="row justify-content-center">
        <div className="col-lg-5 col-md-7 col-12">
          <div className="bg-dark p-5 rounded shadow-lg border border-secondary">
            <h3 className="mb-4 text-center text-white fw-bold">Login</h3>

            {message && (
              <div
                className={`alert ${message.includes("successful") ? "alert-success" : "alert-danger"} text-center`}
                role="alert"
              >
                {message}
              </div>
            )}

            <form
              className="booking-form row"
              onSubmit={handleSubmit}
              noValidate
            >
              <div className="col-12 mb-3">
                <label htmlFor="email" className="form-label text-white">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className={`form-control ${touched.email && errors.email ? "is-invalid" : ""}`}
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.email && errors.email && (
                  <div className="invalid-feedback">{errors.email}</div>
                )}
              </div>

              <div className="col-12 mb-4">
                <label htmlFor="password" className="form-label text-white">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className={`form-control ${touched.password && errors.password ? "is-invalid" : ""}`}
                  placeholder="******"
                  value={formData.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.password && errors.password && (
                  <div className="invalid-feedback">{errors.password}</div>
                )}
              </div>

              <div className="col-12 mt-2">
                <button
                  type="submit"
                  className="btn btn-warning text-dark fw-bold w-100 py-2"
                >
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
