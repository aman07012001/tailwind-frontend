import Details from "./Details";

function StepByStep({ step }) {
  return (
    <>
      <div
        id="step1"
        className=" flex flex-col pt-10 gap-y-5  px-12  md:py-14 md:justify-between  md:flex-row border-2 border-gray-100 hover:border-gray-300 rounded-xl bg-white"
      >
        <div className=" flex flex-col pb-10  mt-0 md:w-1/2 gap-y-6">
          <span className="  px-3 py-1 bg-[#FEFCE8] w-fit border-orange-200 border-opacity-70 border-y-2 border-x-2 text-orange-950 font-medium  rounded-md ">
            {step}{" "}
          </span>
          <h2 className="text-4xl leading-tight font-medium font-display">
            Bootstrap straight from your web app
          </h2>
          <p className=" text-lg text-opacity-75 text-gray-700">
            Copy and paste your web app url into ToDesktop. Customise your app
            design, app icon and window frame UI with no code.
          </p>
          <ul className="grid grid-cols-2 gap-y-4">
            <li className="flex gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#5f6368"
              >
                <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
              </svg>
              <p className="text-gray-600 underline">Multiple Windows</p>
            </li>
            <li className="flex gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#5f6368"
              >
                <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
              </svg>
              <p className="text-gray-600 underline">Multiple Windows</p>
            </li>
            <li className="flex gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#5f6368"
              >
                <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
              </svg>
              <p className="text-gray-600 underline ">Multiple Windows</p>
            </li>
            <li className="flex gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#5f6368"
              >
                <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
              </svg>
              <p className="text-gray-600 underline">Multiple Windows</p>
            </li>
            <li className="flex gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#5f6368"
              >
                <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
              </svg>
              <p className="text-gray-600 underline">Multiple Windows</p>
            </li>
            <li className="flex gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#5f6368"
              >
                <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
              </svg>
              <p className="text-gray-600 underline">Multiple Windows</p>
            </li>
          </ul>
        </div>
        <div className="pb-14">
          <img src=".\src\assets\asset 66.svg"></img>
        </div>
      </div>
    </>
  );
}

export default StepByStep;
