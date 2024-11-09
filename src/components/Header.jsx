import { NavLink } from "react-router-dom";
import Modal from "./Modal";
import { useState } from "react";
import Dropdown from "./Dropdown";
function Header() {
  const [isOpen, setisOpen] = useState(false);
  const [isDrop, setisDrop] = useState(false);
  return (
    <>
      <div className="flex  justify-between py-4 px-4 shadow-md ">
        <div className="flex gap-3 w-36">
          <img src="\src\assets\asset 0.png"></img>
          <h2 className="  text-black-400 font-bold py-4 text-2xl">
            ToDekstop
          </h2>
        </div>
        <div className=" hidden lg:flex justify-around py-5  ">
          <ul className="  flex gap-12  font-semibold">
            <li>
              <NavLink
                className={(a) => {
                  if (!a.isActive) return;
                  return "text-blue-700 underline";
                }}
                to="/home"
              >
                Pricing
              </NavLink>
            </li>
            <li>
              <NavLink
                className={(a) => {
                  if (!a.isActive) return;
                  return "text-blue-700 underline";
                }}
                to="/about"
              >
                Docs
              </NavLink>
            </li>
            <li>
              <NavLink
                className={(a) => {
                  if (!a.isActive) return;
                  return "text-blue-700 underline";
                }}
                to="/contact"
              >
                Changelog
              </NavLink>
            </li>
            <li>
              <button
                onClick={() => {
                  setisOpen(true);
                }}
              >
                Blogs
              </button>
              <Modal setisOpen={setisOpen} isOpen={isOpen} />
            </li>
            <li>
              <NavLink
                className={(a) => {
                  if (!a.isActive) return;
                  return "text-blue-700 underline";
                }}
                to="/Login"
              >
                Login
              </NavLink>
            </li>
          </ul>
        </div>

        <button className=" hidden lg:flex   mt-4 mr-7 border-2 border-gray-400 rounded-lg px-6 mb-2 items-center hover:border-gray-500">
          <img src=".\src\assets\asset 1.svg"></img>
          <span className=" pb-1 font-aman-font font-bold">
            Electron Developers
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#5f6368"
          >
            <path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" />
          </svg>
        </button>
        <button
          onClick={() => {
            console.log("clicked");
            setisDrop(true);
          }}
          className="lg:hidden w-4 h-5"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#5f6368"
          >
            <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
          </svg>
        </button>
        <Dropdown setisDrop={setisDrop} isDrop={isDrop} />
      </div>
    </>
  );
}

export default Header;
