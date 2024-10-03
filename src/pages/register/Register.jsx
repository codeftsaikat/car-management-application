import React, { useContext } from "react";
import login_img from "../../assets/images/login/login.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
const Register = () => {
  const { createUser } = useContext(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    // creating user by using firebase
    createUser(email, password)
      .then((results) => {
        const user = results.user;
        console.log(user);
      })
      .catch((error) => console.log(error.message));
    form.reset();
  };
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left mr-12 mx-auto">
            <img src={login_img} />
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl border-2 border-gray-300 rounded-lg p-2">
            <form onSubmit={handleRegister} className="card-body">
              <h1 className="text-5xl font-bold text-center mb-8 mt-6">
                Register
              </h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-3">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
            <p className="font-poppins text-center text-xl mb-3">
              You have an account? Please{" "}
              <Link to="/login" className="text-orange-600 font-medium">
                {" "}
                login{" "}
              </Link>
              now
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
