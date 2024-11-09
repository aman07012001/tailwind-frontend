import { forwardRef } from "react";

function Details(props, Line4ref) {
  function element(name) {
    return (
      <>
        <h1 className="text-nowrap text-2xl font-semibold">{name}</h1>
        <span className="bg-black w-[8px] h-[8px] rounded-full"></span>
      </>
    );
  }
  return (
    <div className="flex flex-col pt-28 ">
      <span className="w-[500px] pb-24">
        <h1 className="text-5xl font-semibold leading-tight">
          ToDesktop handles the details
        </h1>
      </span>

      <div className=" flex flex-col gap-y-7 lg:grid grid-cols-3 auto-rows-auto lg:gap-x-3 lg:gap-y-3 min-w-screen   ">
        <div className="bg-gray-50 hover:bg-gradient-to-br  from-orange-100  via-purple-50 to-yellow-100 hover:border-red-100  row-start-1 row-end-3  flex flex-col gap-y-8 md:gap-y-2 justify-center border-2 border-gray-300  rounded-2xl   place-items-center py-4">
          <h3 className="font-medium text-2xl ">Native Notifications</h3>
          <img src=".\src\assets\10029.png"></img>
        </div>
        <div className=" flex flex-col bg-gray-50 hover:bg-gradient-to-br gap-y-4 justify-center place-items-center from-orange-100  via-purple-50 to-yellow-100 hover:border-red-100 row-start-1 row-end-4   border-2 border-gray-300  rounded-2xl h-80">
          <h3 className="font-medium text-2xl ">Native Notifications</h3>
          <p className="px-4">
            We’ll ensure the underlying browser is up to date and deliver
            performance improvements, security patches, & additional features.
          </p>
          <img src=".\src\assets\10030.png"></img>
        </div>
        <div className="bg-gray-50 flex flex-col hover:bg-gradient-to-br gap-y-4 from-orange-100 justify-center place-items-center  via-purple-50 to-yellow-100 hover:border-red-100 row-start-1 row-end-3     border-2 border-gray-300  rounded-2xl  h-40">
          <h3 className="font-medium text-2xl ">Native Notifications</h3>
          <img src=".\src\assets\asset 39.png"></img>
        </div>
        <div className="bg-gray-50 flex flex-col hover:bg-gradient-to-br gap-y-4 from-orange-100  via-purple-50 to-yellow-100 justify-center place-items-center hover:border-red-100 row-start-3 row-end-6   border-2 border-gray-300  rounded-2xl  h-80">
          <h3 className="font-medium text-2xl ">Native Notifications</h3>
          <p className="px-2">
            We’ll ensure the underlying browser is up to date and deliver
            performance improvements, security patches, & additional features.
          </p>
          <img src=".\src\assets\10034.png"></img>
        </div>
        <div className="bg-gray-50 flex flex-col hover:bg-gradient-to-br gap-y-4 from-orange-100  via-purple-50 to-yellow-100 hover:border-red-100 justify-center place-items-center h-48 row-start-4 row-end-6   border-2 border-gray-300  rounded-2xl">
          <h3 className="font-medium text-2xl ">Native Notifications</h3>
          <img src=".\src\assets\10029.png"></img>
        </div>
        <div className="bg-gray-50 justify-center flex flex-col place-items-center hover:bg-gradient-to-br gap-y-2 from-orange-100  via-purple-50 to-yellow-100 hover:border-red-100  border-2 border-gray-300  rounded-2xl  row-start-3 row-end-6   h-80">
          <h3 className="font-medium text-2xl ">Native Notifications</h3>
          <p className="px-2">
            We’ll ensure the underlying browser is up to date and deliver
            performance improvements, security patches, & additional features.
          </p>
          <img src=".\src\assets\10030.png"></img>
        </div>
      </div>
      <div
        id="Line 4"
        ref={Line4ref}
        className=" flex items-center -translate-x-48  gap-x-7 py-7 w-fit border-t-2 border-gray-100 border-b-2 mt-20  "
      >
        <span className="bg-black w-[8px] h-[8px] rounded-full"></span>
        {element("Download Analytics")}
        {element("Custom Menus")}
        {element("Multi-Window Support")}
        {element("Trays")}
        {element("Deep Linking")}
        {element("Download Analytics")}
        {element("Launch at Startup")}
        {element("offline Support")}
        {element("Good Signing")}
        <span className="bg-black w-[8px] h-[8px] rounded-full"></span>
      </div>
    </div>
  );
}

export default forwardRef(Details);
