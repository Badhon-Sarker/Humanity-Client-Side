import { useForm } from "react-hook-form";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { IoLogoGoogle } from "react-icons/io5";
import { FaGithub } from "react-icons/fa6";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";
import axios from "axios";
const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { LoginEmail, GoogleLogin, GithubLogin } = useContext(AuthContext);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    const email = data.loginEmail;
    const pass = data.loginPass;

    LoginEmail(email, pass)
      .then((result) => {
        const user = { email }
        axios.post(`${import.meta.env.VITE_SITE}/jwt` , user , {
          withCredentials: true
        })
        toast.success("Login Successful");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleGoogle = () => {
    GoogleLogin()
      .then((result) => {

        axios.post(`${import.meta.env.VITE_SITE}/jwt` , {
          email: result?.user?.email
        }, {
          withCredentials: true
        })
                 
        toast.success("Login Successful");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleGithub = () => {
    GithubLogin()
      .then((result) => {
        axios.post(`${import.meta.env.VITE_SITE}/jwt` , {
          email: result?.user?.email
        }, {
          withCredentials: true
        })
        toast.success("Login Successful");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="hero min-h-screen bg-login-bg ">
      <Helmet>
        <title>Login</title>
      </Helmet>
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold  mt-10 font-playfair">
            Login now!
          </h1>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-red-400 my-10">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white font-playfair">
                  Email
                </span>
              </label>
              <input
                type="email"
                placeholder="Your email"
                className="input input-bordered"
                {...register("loginEmail", { required: true })}
              />
              {errors.loginEmail?.type === "required" && (
                <p>Email is required</p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white font-playfair">
                  Password
                </span>
              </label>
              <input
                type="password"
                placeholder="Your password"
                className="input input-bordered"
                {...register("loginPass", { required: true })}
              />
              {errors.loginPass?.type === "required" && (
                <p>Password is required</p>
              )}
              <label className="label">
                <a
                  href="#"
                  className="label-text-alt link link-hover text-white font-playfair"
                >
                  Forgot password?
                </a>
              </label>
              <div className="flex justify-center gap-1 text-sm text-white font-playfair my-3">
                <p>Dont have an account?</p>{" "}
                <p>
                  <NavLink to={"/register"}>Register</NavLink>
                </p>
              </div>
            </div>

            <div className="form-control mt-2">
              <button className="btn bg-red-700 text-white ">Login</button>
            </div>
            <div>
              <div className="divider">OR</div>
            </div>

            <div>
              <div className="flex flex-col gap-2">
                <div
                  onClick={handleGoogle}
                  className=" bg-red-500 text-white flex justify-center items-center gap-2 py-2 rounded-lg border"
                >
                  <div>
                    <IoLogoGoogle />
                  </div>
                  <div>Google</div>
                </div>
                <div
                  onClick={handleGithub}
                  className=" bg-red-500 text-white flex justify-center items-center gap-2 py-2 rounded-lg border"
                >
                  <div>
                    <FaGithub />
                  </div>
                  <div>Github</div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
