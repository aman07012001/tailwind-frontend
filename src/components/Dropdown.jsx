import { createPortal } from "react-dom";
import { NavLink } from "react-router-dom";

function Dropdown({ isDrop, setisDrop }) {
  return createPortal(
    <div
      className={` md:hidden flex  justify-between fixed inset-0 bg-white   ${!isDrop && "hidden"} `}
    >
      <ul className="  flex-col gap-4 ml-3 mt-10 font-semibold">
        <li className="hover:scale-110 mb-6 block">
          <NavLink
            onClick={() => {
              setisDrop(false);
            }}
            className={(a) => {
              if (!a.isActive) return;
              return "text-blue-700 underline";
            }}
            to="/home"
          >
            Pricing
          </NavLink>
        </li>
        <li className="hover:scale-110 mb-6 block">
          <NavLink
            onClick={() => {
              setisDrop(false);
            }}
            className={(a) => {
              if (!a.isActive) return;
              return "text-blue-700 underline";
            }}
            to="/about"
          >
            Docs
          </NavLink>
        </li>
        <li className="hover:scale-110 mb-6 block">
          <NavLink
            onClick={() => {
              setisDrop(false);
            }}
            className={(a) => {
              if (!a.isActive) return;
              return "text-blue-700 underline";
            }}
            to="/contact"
          >
            Changelog
          </NavLink>
        </li>
        <li className="hover:scale-110 mb-6 block">
          <button
            onClick={() => {
              setisDrop(false);
              console.log("clicked");
              setisOpen(true);
            }}
          >
            Blogs
          </button>
        </li>
        <li className="hover:scale-110 mb-6 block">
          <NavLink
            onClick={() => {
              setisDrop(false);
            }}
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

      <svg
        className="mr-9 mt-5"
        onClick={() => {
          setisDrop(false);
        }}
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 -960 960 960"
        width="24px"
        fill="#5f6368"
      >
        <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
      </svg>
    </div>,
    document.getElementById("portal")
  );
}

export default Dropdown;
