import { useEffect, useState } from "react";
import { useRef } from "react";
import { Outlet } from "react-router-dom";
import Details from "./Details";
import StepByStep from "./StepByStep";
import ChoosePlan from "./ChoosePlan";

function Hero() {
  const initialTranslateLTR = -48 * 4;
  const initialTranslateRTL = 36 * 4;
  const Line1ref = useRef(null);
  const Line2ref = useRef(null);
  const Line3ref = useRef(null);
  const Line4ref = useRef(null);
  const [translateX, settranslateX] = useState(0);
  const [translateY, settranslateY] = useState(0);
  const [translateZ, settranslateZ] = useState(0);
  const [translateA, settranslateA] = useState(0);

  function trigger(element, isLtr, speed) {
    const companyObserver = new IntersectionObserver((entries) => {
      for (let entry of entries) {
        if (entry.isIntersecting) {
          document.addEventListener("scroll", scrollHandler);
        } else {
          document.removeEventListener("scroll", scrollHandler);
        }
      }
    });
    companyObserver.observe(element);

    function scrollHandler() {
      const data =
        (window.innerHeight - element.getBoundingClientRect().top) * speed;

      if (isLtr && element.id == "Line1") {
        let translateXData = initialTranslateLTR + data;

        settranslateX(translateXData);
        element.style.transform = `translateX(${translateX}px)`;
      }
      if (!isLtr && element.id == "Line2") {
        let translateYData = -(initialTranslateRTL + data);

        settranslateY(translateYData);
        element.style.transform = `translateX(${translateY}px)`;
      }
      if (isLtr && element.id == "Line3") {
        let translateZData = initialTranslateLTR + data;
        settranslateZ(translateZData);
        element.style.transform = `translateX(${translateZ}px)`;
      }
      if (isLtr && element.id == "Line 4") {
        let translateAData = initialTranslateLTR + data;
        settranslateA(translateAData);
        element.style.transform = `translateX(${translateA}px)`;
      }
    }
  }

  useEffect(() => {
    trigger(Line1ref.current, true, 0.15);
    trigger(Line2ref.current, false, 0.15);
    trigger(Line3ref.current, true, 0.15);
    trigger(Line4ref.current, true, 0.3);
  });

  return (
    <>
      <div className="bg-gradient-to-b from-purple-50 via-orange-50 to-transparent mt-0 min-h-screen  ">
        <div className=" pt-14  mx-auto flex-col place-items-center  ">
          <div className=" shadow-md shadow-gray-300  hover:shadow-lg hover:-translate-y-1 transition rounded-lg w-80 h-10 items-center bg-[#FEFCE8] flex justify-around  mb-10 ml-[0px]  group ">
            <div className=" w-2 h-2 bg-yellow-400 rounded-full "></div>
            <p className="text-orange-500 rounded-full">
              v0.21.1:
              <span className="text-[#854D0E] font-semibold font-">
                Find-in-page bug fixed
              </span>
            </p>
            <svg
              className="group-hover:translate-x-1 transition"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#111111"
            >
              <path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" />
            </svg>
          </div>

          <div className=" hidden  md:fl borderex  items-center min-h-24 min-w-24 md:min-h-32 md:min-w-32 place-items-center  gap-8">
            <div className="flex justify-center font-semibold text-gray-500">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#5f6368"
              >
                <path d="M840-680v480q0 33-23.5 56.5T760-120H200q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h480l160 160Zm-80 34L646-760H200v560h560v-446ZM480-240q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35ZM240-560h360v-160H240v160Zm-40-86v446-560 114Z" />
              </svg>
              <p>Code Optional</p>
            </div>

            <div className="flex justify-center  text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#434343"
              >
                <path d="M720-120H280v-520l280-280 50 50q7 7 11.5 19t4.5 23v14l-44 174h258q32 0 56 24t24 56v80q0 7-2 15t-4 15L794-168q-9 20-30 34t-44 14Zm-360-80h360l120-280v-80H480l54-220-174 174v406Zm0-406v406-406Zm-80-34v80H160v360h120v80H80v-520h200Z" />
              </svg>
              <p>Drag & drop builder</p>
            </div>

            <div className="flex justify-center  text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#5f6368"
              >
                <path d="M0-160v-80h160v-40q-33 0-56.5-23.5T80-360v-400q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v400q0 33-23.5 56.5T800-280v40h160v80H0Zm160-200h640v-400H160v400Zm0 0v-400 400Z" />
              </svg>
              <p>Windows, Mac, Linux</p>
            </div>
          </div>

          <div>
            <p className="text-4xl text-center sm:text-6xl  mt-8 font-bold leading-snug ">
              {" "}
              Web app to desktop app on minutes
            </p>

            <p className="text-xl text-center mt-4 sm-2xl sm-mt-8 text-gray-700 font-display leading-snug">
              Take your web app codebase and transform it into a cross platform
              desktop app with native functionality.
            </p>
            <div className=" flex flex-col sm:flex-row gap-4 w-full sm:justify-center mt-10   ">
              <button className="bg-[#3238F2] ml-4 mr-4 text-center px-6 py-3 text-white rounded-lg text-base font-semibold hover:opacity-70 ">
                Download now
              </button>
              <button className="bg-[#FFFFFF] ml-4 mr-4 p-3 px-6 text-black text-base rounded-lg border-2 border-gray-300 hover:border-gray-600">
                Read Docs
              </button>
            </div>
            <span className=" flex gap-4 justify-center mt-20">
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_8172_268628)">
                  <path
                    d="M14.75 16.5L10.25 21L5.75 16.5"
                    stroke="#2F3033"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M19.25 3C16.8631 3 14.5739 3.94821 12.886 5.63604C11.1982 7.32387 10.25 9.61305 10.25 12V21"
                    stroke="#2F3033"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_8172_268628">
                    <rect
                      width="24"
                      height="24"
                      fill="white"
                      transform="matrix(-1 0 0 1 24.5 0)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <p className="text-black font-semibold">
                {" "}
                APPS POWERED BY TODEKSTOP
              </p>
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_8172_268628)">
                  <path
                    d="M14.75 16.5L10.25 21L5.75 16.5"
                    stroke="#2F3033"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M19.25 3C16.8631 3 14.5739 3.94821 12.886 5.63604C11.1982 7.32387 10.25 9.61305 10.25 12V21"
                    stroke="#2F3033"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_8172_268628">
                    <rect
                      width="24"
                      height="24"
                      fill="white"
                      transform="matrix(-1 0 0 1 24.5 0)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </span>
          </div>
        </div>
        <div
          id="companies-container"
          className=" flex flex-col mt-7 md:mt-10 gap-4 overflow-x-hidden"
        >
          {" "}
          <div
            ref={Line1ref}
            id="Line1"
            className="flex gap-5 w-screen -translate-x-48"
          >
            <div className="bg-white flex-col border border-gray-400  min-h-24 min-w-24 md:min-h-32 md:min-w-32 gap-2 place-items-center  rounded-lg">
              <img src=".\src\assets\10006.png" />
              <h3 className="font-semibold">ClickUp</h3>
            </div>
            <div className="bg-white flex-col border border-gray-400 min-h-24 min-w-24 md:min-h-32 md:min-w-32 gap-2 place-items-center  rounded-lg">
              <img src=".\src\assets\10015.png" />
              <h3 className="font-semibold">ClickUp</h3>
            </div>
            <div className="bg-white flex-col border border-gray-400  min-h-24 min-w-24 md:min-h-32 md:min-w-32 gap-2 place-items-center  rounded-lg">
              <img src=".\src\assets\10006.png" />
              <h3 className="font-semibold">ClickUp</h3>
            </div>
            <div className="bg-white flex-col border border-gray-400 min-h-24 min-w-24 md:min-h-32 md:min-w-32 gap-2 place-items-center  rounded-lg">
              <img src=".\src\assets\10016.png" />
              <h3 className="font-semibold">ClickUp</h3>
            </div>
            <div className="bg-white flex-col border border-gray-400 min-h-24 min-w-24 md:min-h-32 md:min-w-32 gap-2 place-items-center  rounded-lg">
              <img src=".\src\assets\10003.png" />
              <h3 className="font-semibold">ClickUp</h3>
            </div>
            <div className="bg-white flex-col border border-gray-400  min-h-24 min-w-24 md:min-h-32 md:min-w-32 gap-2 place-items-center  rounded-lg">
              <img src=".\src\assets\10006.png" />
              <h3 className="font-semibold">ClickUp</h3>
            </div>
            <div className="bg-white flex-col border border-gray-400 min-h-24 min-w-24 md:min-h-32 md:min-w-32 gap-2 place-items-center  rounded-lg">
              <img src=".\src\assets\10004.png" />
              <h3 className="font-semibold">ClickUp</h3>
            </div>
            <div className="bg-white flex-col border border-gray-400 min-h-24 min-w-24 md:min-h-32 md:min-w-32 gap-2 place-items-center  rounded-lg">
              <img src=".\src\assets\10015.png" />
              <h3 className="font-semibold">ClickUp</h3>
            </div>
            <div className="bg-white flex-col border border-gray-400 min-h-24 min-w-24 md:min-h-32 md:min-w-32 gap-2 place-items-center  rounded-lg">
              <img src=".\src\assets\10013.png" />
              <h3 className="font-semibold">ClickUp</h3>
            </div>
            <div className="bg-white flex-col border border-gray-400 min-h-24 min-w-24 md:min-h-32 md:min-w-32 gap-2 place-items-center  rounded-lg">
              <img src=".\src\assets\10007.png" />
              <h3 className="font-semibold">ClickUp</h3>
            </div>
            <div className="bg-white flex-col border border-gray-400 min-h-24 min-w-24 md:min-h-32 md:min-w-32 gap-2 place-items-center  rounded-lg">
              <img src=".\src\assets\10008.png" />
              <h3 className="font-semibold">ClickUp</h3>
            </div>
            <div className="bg-white flex-col border border-gray-400 min-h-24 min-w-24 md:min-h-32 md:min-w-32 gap-2 place-items-center  rounded-lg">
              <img src=".\src\assets\10016.png" />
              <h3 className="font-semibold">ClickUp</h3>
            </div>
          </div>
          <div
            id="Line2"
            ref={Line2ref}
            className="flex gap-4 w-screen translate-x-36 "
          >
            <div className="bg-white flex-col border border-gray-400 min-h-24 min-w-24 md:min-h-32 md:min-w-32 gap-2 place-items-center  rounded-lg">
              <img src=".\src\assets\10008.png" />
              <h3 className="font-semibold">ClickUp</h3>
            </div>
            <div className="bg-white flex-col border border-gray-400 min-h-24 min-w-24 md:min-h-32 md:min-w-32 gap-2 place-items-center  rounded-lg">
              <img src=".\src\assets\10012.png" />
              <h3 className="font-semibold">ClickUp</h3>
            </div>
            <div className="bg-white flex-col border border-gray-400 min-h-24 min-w-24 md:min-h-32 md:min-w-32 gap-2 place-items-center  rounded-lg">
              <img src=".\src\assets\10010.png" />
              <h3 className="font-semibold">ClickUp</h3>
            </div>
            <div className="bg-white flex-col border border-gray-400 min-h-24 min-w-24 md:min-h-32 md:min-w-32 gap-2 place-items-center  rounded-lg">
              <img src=".\src\assets\10016.png" />
              <h3 className="font-semibold">ClickUp</h3>
            </div>
            <div className="bg-white flex-col border border-gray-400 min-h-24 min-w-24 md:min-h-32 md:min-w-32 gap-2 place-items-center  rounded-lg">
              <img src=".\src\assets\10005.png" />
              <h3 className="font-semibold">ClickUp</h3>
            </div>
            <div className="bg-white flex-col border border-gray-400 min-h-24 min-w-24 md:min-h-32 md:min-w-32 gap-2 place-items-center  rounded-lg">
              <img src=".\src\assets\10006.png" />
              <h3 className="font-semibold">ClickUp</h3>
            </div>
            <div className="bg-white flex-col border border-gray-400 min-h-24 min-w-24 md:min-h-32 md:min-w-32 gap-2 place-items-center  rounded-lg">
              <img src=".\src\assets\10004.png" />
              <h3 className="font-semibold">ClickUp</h3>
            </div>
            <div className="bg-white flex-col border border-gray-400 min-h-24 min-w-24 md:min-h-32 md:min-w-32 gap-2 place-items-center  rounded-lg">
              <img src=".\src\assets\10015.png" />
              <h3 className="font-semibold">ClickUp</h3>
            </div>
            <div className="bg-white flex-col border border-gray-400 min-h-24 min-w-24 md:min-h-32 md:min-w-32 gap-2 place-items-center  rounded-lg">
              <img src=".\src\assets\10013.png" />
              <h3 className="font-semibold">ClickUp</h3>
            </div>
            <div className="bg-white flex-col border border-gray-400 min-h-24 min-w-24 md:min-h-32 md:min-w-32 gap-2 place-items-center  rounded-lg">
              <img src=".\src\assets\10007.png" />
              <h3 className="font-semibold">ClickUp</h3>
            </div>
            <div className="bg-white flex-col border border-gray-400 min-h-24 min-w-24 md:min-h-32 md:min-w-32 gap-2 place-items-center  rounded-lg">
              <img src=".\src\assets\10008.png" />
              <h3 className="font-semibold">ClickUp</h3>
            </div>
            <div className="bg-white flex-col border border-gray-400 min-h-24 min-w-24 md:min-h-32 md:min-w-32 gap-2 place-items-center  rounded-lg">
              <img src=".\src\assets\10007.png" />
              <h3 className="font-semibold">ClickUp</h3>
            </div>{" "}
            <div className="bg-white flex-col border border-gray-400 min-h-24 min-w-24 md:min-h-32 md:min-w-32 gap-2 place-items-center  rounded-lg">
              <img src=".\src\assets\10008.png" />
              <h3 className="font-semibold">ClickUp</h3>
            </div>
          </div>
          <div
            ref={Line3ref}
            id="Line3"
            className="flex gap-5 md:hidden w-screen -translate-x-48"
          >
            <div className="bg-white flex-col border border-gray-400 min-h-24 min-w-24 md:min-h-32 md:min-w-32 gap-2 place-items-center  rounded-lg">
              <img src=".\src\assets\10013.png" />
              <h3 className="font-semibold">ClickUp</h3>
            </div>
            <div className="bg-white flex-col border border-gray-400 min-h-24 min-w-24 md:min-h-32 md:min-w-32 gap-2 place-items-center  rounded-lg">
              <img src=".\src\assets\10012.png" />
              <h3 className="font-semibold">ClickUp</h3>
            </div>
            <div className="bg-white flex-col border border-gray-400 min-h-24 min-w-24 md:min-h-32 md:min-w-32 gap-2 place-items-center  rounded-lg">
              <img src=".\src\assets\10014.png" />
              <h3 className="font-semibold">ClickUp</h3>
            </div>
            <div className="bg-white flex-col border border-gray-400 min-h-24 min-w-24 md:min-h-32 md:min-w-32 gap-2 place-items-center  rounded-lg">
              <img src=".\src\assets\10015.png" />
              <h3 className="font-semibold">ClickUp</h3>
            </div>
            <div className="bg-white flex-col border border-gray-400 min-h-24 min-w-24 md:min-h-32 md:min-w-32 gap-2 place-items-center  rounded-lg">
              <img src=".\src\assets\10009.png" />
              <h3 className="font-semibold">ClickUp</h3>
            </div>
            <div className="bg-white flex-col border border-gray-400 min-h-24 min-w-24 md:min-h-32 md:min-w-32 gap-2 place-items-center  rounded-lg">
              <img src=".\src\assets\10016.png" />
              <h3 className="font-semibold">ClickUp</h3>
            </div>
            <div className="bg-white flex-col border border-gray-400 min-h-24 min-w-24 md:min-h-32 md:min-w-32 gap-2 place-items-center  rounded-lg">
              <img src=".\src\assets\10004.png" />
              <h3 className="font-semibold">ClickUp</h3>
            </div>
            <div className="bg-white flex-col border border-gray-400 min-h-24 min-w-24 md:min-h-32 md:min-w-32 gap-2 place-items-center  rounded-lg">
              <img src=".\src\assets\10003.png" />
              <h3 className="font-semibold">ClickUp</h3>
            </div>
            <div className="bg-white flex-col border border-gray-400 min-h-24 min-w-24 md:min-h-32 md:min-w-32 gap-2 place-items-center  rounded-lg">
              <img src=".\src\assets\10008.png" />
              <h3 className="font-semibold">ClickUp</h3>
            </div>
            <div className="bg-white flex-col border border-gray-400 min-h-24 min-w-24 md:min-h-32 md:min-w-32 gap-2 place-items-center  rounded-lg">
              <img src=".\src\assets\10007.png" />
              <h3 className="font-semibold">ClickUp</h3>
            </div>
            <div className="bg-white flex-col border border-gray-400 min-h-24 min-w-24 md:min-h-32 md:min-w-32 gap-2 place-items-center  rounded-lg">
              <img src=".\src\assets\10005.png" />
              <h3 className="font-semibold">ClickUp</h3>
            </div>
            <div className="bg-white flex-col border border-gray-400 min-h-24 min-w-24 md:min-h-32 md:min-w-32 gap-2 place-items-center  rounded-lg">
              <img src=".\src\assets\10010.png" />
              <h3 className="font-semibold">ClickUp</h3>
            </div>
          </div>
        </div>
        <div className=" flex flex-col mt-40 mx-6 gap-6">
          <h1 className="text-6xl  font-semibold mb-28 ">How it Works</h1>
          <StepByStep step="Step 1" />
          <StepByStep step="Step 2" />
          <StepByStep step="Step 3" />

          <Details ref={Line4ref} />
          <div className=" flex flex-col gap-y-4 md:flex-row  md:gap-x-5  mt-16">
            <ChoosePlan
              type="Free"
              use="For personal use or testing your app before deploying to customers."
            />
            <ChoosePlan
              type="Essential"
              use="For simple desktop apps."
              pricing="$99/month"
            />
            <ChoosePlan
              type="Professional"
              use="For sophisticated desktop apps."
              pricing="$199/month"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
