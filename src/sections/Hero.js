import React from "react";

export default function Hero() {
  return (
    <div className="mx-auto max-w-screen-1200px  h-screen flex items-center justify-center sm:max-w-600px hero">
      <div className="text-4xl p-3 m-3 text-mainGreen font-rubik font-bold w-2/3 flex flex-col border-2 border-mainGray xsm:text-5xl sm:text-7xl md:text-8xl bg-gradient-to-r from-gray-500 via-stone-300 to-gray-500">
        <div className="text-left ">
          <div className="typed">Frontend</div>
        </div>
        <div className="text-right text-mainGray ">
          <div className="typed">Developer</div>
        </div>
      </div>
    </div>
  );
}
