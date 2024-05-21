import React, { useState } from "react";
import LoginGIF from "../assest/signin.gif";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData, "66");
  };

  return (
    <section id="login">
      <div className="mx-auto container p-4 ">
        <div className="bg-white p-6 max-w-sm mx-auto">
          <div className="w-20 h-20 mx-auto">
            <img src={LoginGIF} alt="sign gif" />
          </div>

          <form className="pt-6 flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
              <label>Email :</label>
              <div className="bg-slate-100 p-2">
                <input
                  type="email"
                  placeholder="enter email"
                  className="w-full h-full outline-none bg-transparent "
                  onChange={handleChange}
                  name="email"
                  value={formData.email}
                />
              </div>
            </div>

            <div>
              <label>Password :</label>
              <div className="bg-slate-100 p-2 flex items-center">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="enter password"
                  className="w-full h-full outline-none bg-transparent "
                  onChange={handleChange}
                  name="password"
                  value={formData.password}
                />
                <div onClick={() => setShowPassword(!showPassword)}>
                  <span className="cursor-pointer">
                    {showPassword ? <FaEye /> : <FaEyeSlash />}
                  </span>
                </div>
              </div>
              <Link
                to={"/forgot-password"}
                className="block w-fit ml-auto hover:underline hover:text-red-600"
              >
                Forgot password
              </Link>
            </div>

            <button className="px-6 py-2 bg-red-600 hover:bg-white border border-red-600 hover:text-red-600 hover:border hover:border-red-600  w-full max-w-[200px] mx-auto rounded-full text-white hover:scale-110 transition-all block mt-6">
              Login
            </button>
          </form>

          <p className="my-5">
            Don't have account ?{" "}
            <Link
              to={"/sign-up"}
              className="text-red-600 hover:underline hover:text-red-700"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
