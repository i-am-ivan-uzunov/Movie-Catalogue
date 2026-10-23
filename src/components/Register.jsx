import { useState } from "react";
import { supabase } from "../supabaseClient";

export default function Register() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    imageUrl: "",
    password: "",
    repass: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [message, setMessage] = useState("");

  const validate = (name, value, currentFormData = formData) => {
    let errorMsg = "";

    if (name === "firstName" && value.trim().length < 2) {
      errorMsg = "First name must be at least 2 characters long.";
    }
    if (name === "lastName" && value.trim().length < 2) {
      errorMsg = "Last name must be at least 2 characters long.";
    }
    if (name === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      errorMsg = "Please enter a valid email address.";
    }
    if (name === "imageUrl" && !/^https?:\/\/.+/.test(value)) {
      errorMsg = "Please enter a valid URL (starting with http:// or https://).";
    }
    if (name === "password" && value.length < 6) {
      errorMsg = "Password must be at least 6 characters long.";
    }
    if (name === "repass" && value !== currentFormData.password) {
      errorMsg = "Passwords do not match.";
    }

    return errorMsg;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    const newFormData = {
      ...formData,
      [name]: value,
    };

    setFormData(newFormData);
    setTouched({ ...touched, [name]: true });

    setErrors({
      ...errors,
      [name]: validate(name, value, newFormData),
      ...(name === "password" && touched.repass ? { repass: validate("repass", newFormData.repass, newFormData) } : {})
    });
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched({ ...touched, [name]: true });
    setErrors({ ...errors, [name]: validate(name, value, formData) });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    let isValid = true;

    Object.keys(formData).forEach((key) => {
      const error = validate(key, formData[key], formData);
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

    const { error } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password,
      options: {
        data: {
          first_name: formData.firstName,
          last_name: formData.lastName,
          avatar_url: formData.imageUrl,
        },
      },
    });

    if (error) {
      setMessage("Registration failed: " + error.message);
    } else {
      setMessage("Registration successful! You can now log in.");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        imageUrl: "",
        password: "",
        repass: "",
      });
      setTouched({});
      setErrors({});
    }
  };

  return (
    <div className="container mt-5 mb-5 pt-5">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8 col-12">
          <div className="booking bg-white p-5 rounded shadow">
            <h3 className="mb-4 text-center">Registration</h3>

            {message && (
              <div className={`alert ${message.includes("successful") ? "alert-success" : "alert-danger"} text-center`} role="alert">
                {message}
              </div>
            )}

            <form className="booking-form row" onSubmit={handleSubmit} noValidate>
              <div className="col-lg-6 col-12 mb-3">
                <label htmlFor="firstName" className="form-label">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  className={`form-control ${touched.firstName && errors.firstName ? "is-invalid" : ""}`}
                  placeholder="First name"
                  value={formData.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.firstName && errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
              </div>

              <div className="col-lg-6 col-12 mb-3">
                <label htmlFor="lastName" className="form-label">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  className={`form-control ${touched.lastName && errors.lastName ? "is-invalid" : ""}`}
                  placeholder="Last name"
                  value={formData.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.lastName && errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>}
              </div>

              <div className="col-lg-6 col-12 mb-3">
                <label htmlFor="email" className="form-label">Email</label>
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
                {touched.email && errors.email && <div className="invalid-feedback">{errors.email}</div>}
              </div>

              <div className="col-lg-6 col-12 mb-3">
                <label htmlFor="imageUrl" className="form-label">Profile picture</label>
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
                {touched.imageUrl && errors.imageUrl && <div className="invalid-feedback">{errors.imageUrl}</div>}
              </div>

              <div className="col-lg-6 col-12 mb-3">
                <label htmlFor="password" className="form-label">Password</label>
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
                {touched.password && errors.password && <div className="invalid-feedback">{errors.password}</div>}
              </div>

              <div className="col-lg-6 col-12 mb-3">
                <label htmlFor="repass" className="form-label">Confirm Password</label>
                <input
                  type="password"
                  name="repass"
                  id="repass"
                  className={`form-control ${touched.repass && errors.repass ? "is-invalid" : ""}`}
                  placeholder="******"
                  value={formData.repass}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.repass && errors.repass && <div className="invalid-feedback">{errors.repass}</div>}
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
  );
}