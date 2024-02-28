import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
 
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post(
        'https://psx-t222.onrender.com/api/login', formData
      );
      
      console.log('Response Data:', response.data);
  
      if (response?.data?.status) {
        let token = response?.data?.token;
        localStorage.setItem("psx_token", token);
        toast.success("Login Successful");
        navigate("/dashboard");
      } else {
        
        toast.error(response?.data?.message);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error('An unexpected error occurred. Please try again later.');
    }
  };
  


  return (
    <main>
      <div className="container">
        <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                <div className="d-flex justify-content-center py-4">
                  <a
                    // href="index.html"
                    className="logo d-flex align-items-center w-auto"
                  >
                    <img src="assets/img/icon.png" alt="Logo" />
                    <span className="d-none d-lg-block">
                      <span style={{ color: "#FF7F00" }}>Live </span>
                      <span style={{ color: "#0083BE" }}>PBX</span>
                    </span>
                  </a>
                </div>
                {/* End Logo */}
                <div className="card mb-3">
                  <div className="card-body">
                    <div className="pt-4 pb-2">
                      <h5 className="card-title text-center pb-0 fs-4">
                        Login to Your Account
                      </h5>
                      <p className="text-center small">
                        Enter your username &amp; password to login
                      </p>
                    </div>
                    <form className="row g-3 needs-validation" noValidate onSubmit={handleSubmit}>
                      <div className="col-12">
                        <label htmlFor="yourUsername" className="form-label">
                          Username
                        </label>
                        <div className="input-group has-validation">
                          <span
                            className="input-group-text"
                            id="inputGroupPrepend"
                          >
                            @
                          </span>
                          <input
                            type="text"
                            name="email"
                            className="form-control"
                            id="email"
                            onChange={handleChange} 
                            required   
                          />
                          <div className="invalid-feedback">
                            Please enter your email.
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <label htmlFor="yourPassword" className="form-label">
                          Password
                        </label>
                        <input
                          type="password"
                          name="password"
                          className="form-control"
                          id="yourPassword"
                          onChange={handleChange} // Add this line
                          required
                        />
                        <div className="invalid-feedback">
                          Please enter your password!
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="remember"
                            defaultValue="true"
                            id="rememberMe"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="rememberMe"
                          >
                            Remember me
                          </label>
                        </div>
                      </div>
                      <div className="col-12">
                        <button type="submit"
                          className="btn btn-primary w-100"
                        >
                          Login
                        </button>
                      </div>
                      <div className="col-12">
                        <p className="small mb-0">
                          Don't have account?{" "}
                          <p>
                            Don't have an account?{" "}
                            <Link to="/register">Register</Link>
                          </p>
                        </p>
                      </div>
                    </form>
                  </div>
                </div>
                {/* <div className="credits">
                  {/* All the links in the footer should remain intact. */}
                {/* You can delete the links only if you purchased the pro version. */}
                {/* Licensing information: https://bootstrapmade.com/license/ */}
                {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/nice-admin-bootstrap-admin-html-template/ */}
                {/* Designed by{" "}
                  <a href="https://bootstrapmade.com/">BootstrapMade</a>
                </div> */}
              </div>
            </div>
          </div>
        </section>
      </div>
   
    </main>
  );
};

export default Login;
