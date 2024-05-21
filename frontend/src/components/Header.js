import React from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="h-16 shadow-md bg-white">
      <div className="h-full container mx-auto flex justify-between items-center px-4">
        <div className="italic text-3xl font-semibold">Shashvat</div>

        <div className="hidden  lg:flex w-full justify-between max-w-sm">
          <input
            type="text"
            placeholder="Search product here..."
            className="w-full outline-none border pl-4 rounded-l-full focus-within:shadow"
          />
          <div className="text-lg bg-red-600 min-w-[50px] h-8 flex items-center justify-center rounded-r-full text-white">
            <HiOutlineSearch />
          </div>
        </div>

        <div className=" flex gap-7 items-center">
          <div className="text-2xl cursor-pointer">
            <FaRegCircleUser />
          </div>
          <div className="text-2xl relative">
            <span>
              <FaShoppingCart />
            </span>
            <div className="text-sm bg-red-600 text-white w-5 h-5 rounded-full p-1 flex justify-center items-center absolute -top-2 -right-3">
              <p>0</p>
            </div>
          </div>

          <div>
            <Link
              to={"/login"}
              className="bg-red-600 hover:bg-red-700 px-5 py-2 text-white rounded-full "
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
