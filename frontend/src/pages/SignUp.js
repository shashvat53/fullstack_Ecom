import React, { useState } from "react";
import LoginGIF from "../assest/signin.gif";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import imageTobase64 from "../helpers/imageTobase64";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    profilePick: "",
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

  const handleUploadPhoto = async (event) => {
    const file = event.target.files[0];
    const imagePick = await imageTobase64(file);
    setFormData((preve) => {
      return {
        ...preve,
        profilePick: imagePick,
      };
    });
    console.log("imagePick :", imagePick);
  };

  return (
    <section id="signup">
      <div className="mx-auto container p-4 ">
        <div className="bg-white p-6 max-w-sm mx-auto">
          <div className="w-20 h-20 mx-auto relative overflow-hidden rounded-full">
            <div>
              <img src={formData?.profilePick || LoginGIF} alt="sign gif" />
            </div>
            <form>
              <label>
                <div className="bg-slate-200 text-xs pb-5 cursor-pointer pt-1 absolute bottom-0 w-full rounded-b-full  bg-opacity-70">
                  Upload Photo
                </div>
                <input
                  type="file"
                  className="hidden"
                  onChange={handleUploadPhoto}
                />
              </label>
            </form>
          </div>

          <form className="pt-6 flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
              <label>Name :</label>
              <div className="bg-slate-100 p-2">
                <input
                  type="text"
                  placeholder="enter your name"
                  className="w-full h-full outline-none bg-transparent "
                  onChange={handleChange}
                  name="name"
                  value={formData.name}
                  required
                />
              </div>
            </div>
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
                  required
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
                  required
                />
                <div onClick={() => setShowPassword(!showPassword)}>
                  <span className="cursor-pointer">
                    {showPassword ? <FaEye /> : <FaEyeSlash />}
                  </span>
                </div>
              </div>
            </div>

            <div>
              <label>Confirm Password :</label>
              <div className="bg-slate-100 p-2 flex items-center">
                <input
                  type={confirmPassword ? "text" : "password"}
                  placeholder="enter password"
                  className="w-full h-full outline-none bg-transparent "
                  onChange={handleChange}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  required
                />
                <div onClick={() => setConfirmPassword(!confirmPassword)}>
                  <span className="cursor-pointer">
                    {confirmPassword ? <FaEye /> : <FaEyeSlash />}
                  </span>
                </div>
              </div>
            </div>

            <button className="px-6 py-2 bg-red-600 hover:bg-white border border-red-600 hover:text-red-600 hover:border hover:border-red-600  w-full max-w-[200px] mx-auto rounded-full text-white hover:scale-110 transition-all block mt-6">
              Login
            </button>
          </form>

          <p className="my-5">
            Already have account ?{" "}
            <Link
              to={"/login"}
              className="text-red-600 hover:underline hover:text-red-700"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
