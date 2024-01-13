import React from "react";

export default function Hero() {
  return (
    <div className="mx-auto max-w-screen-1200px  h-screen flex items-center justify-center bg-gradient-to-r from-gray-100 to-white sm:max-w-600px">
      <div className="text-4xl xsm:text-5xl p-3 m-3 text-mainGreen font-rubik font-bold w-2/3 flex flex-col border-2 border-mainGray md:text-8xl">
        <div className="text-left ">
          <div className="typed">Frontend</div>
        </div>
        <div className="text-right text-mainGray">
          <div className="typed">Developer</div>
        </div>
      </div>
    </div>
  );
}
