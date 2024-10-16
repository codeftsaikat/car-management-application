import login_img from "../../assets/images/login/login.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import axios from "axios";
import useAuth from "../../hooks/useAuth";
const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { loginUser } = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    // login method implement
    loginUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log("--------->>>>>>",loggedUser);
        navigate(location?.state ?location.state :'/');
        // const user = { email };
        // get auth
        // axios
        //     .post("https://car-management-server.onrender.com/jwt", user, { withCredentials: true })
        //     .then((res) => {
        //       console.log(res.data);
        //       if (res.data.success) {
        //           navigate(location?.state ?location.state :'/');
        //       }
        //     });
      })
      .catch((error) => console.log("Error is:", error));
    // form.reset();
  };

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left mr-12 mx-auto">
            <img src={login_img} alt="" />
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl border-2 border-gray-300 rounded-lg p-2">
            <form onSubmit={handleLogin} className="card-body">
              <h1 className="text-5xl font-bold text-center mb-8 mt-6">
                Login
              </h1>
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
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <p className="font-poppins text-center text-xl mb-3">
              Don't have an account? Please{" "}
              <Link to="/register" className="text-orange-600 font-medium">
                {" "}
                register{" "}
              </Link>
              now
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
