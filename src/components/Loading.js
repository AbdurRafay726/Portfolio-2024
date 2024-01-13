import React from "react";

export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center w-[100%] h-screen z-50 overflow-hidden fixed bg-white border-4 border-black moveupanimation">
      <div className="spinner-container">
        <div className="loading-spinner1 flex flex-col justify-between text-xl md:text-4xl">
          <div className="rotate-180 -mb-3">Portfolio</div>
          <div>Loading</div>
        </div>
      </div>
    </div>
  );
}
