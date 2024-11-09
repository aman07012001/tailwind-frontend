import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <div className="flex flex-col  px-6 mt-14">
      <div className="flex flex-col gap-y-8 bg-gray-50 justify-between place-items-center py-20 rounded-xl border-2 border-gray-100 ">
        <a className="font-light">Documentation</a>
        <span className="flex flex-row gap-x-12">
          <img
            className="w-6"
            src=".\src\assets\twitter-brands-solid.svg"
          ></img>
          <img className="w-6" src=".\src\assets\github-brands-solid.svg"></img>
        </span>
        <span className="flex flex-row w-fit gap-x-3 items-center">
          <img src="\src\assets\asset 0.png"></img>
          <h1 className="font-medium">ToDesktop</h1>
        </span>
      </div>

      <div className="flex flex-col gap-y-9 place-items-center justify-between py-20">
        <span className="flex gap-x-2">
          <img className="w-4" src=".\src\assets\asset 54.svg"></img>
          <p className="font-light">A Y Combinator company.</p>
        </span>
        <p className="text-sm text-gray-400">
          © 2024 ToDesktop, Inc. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
