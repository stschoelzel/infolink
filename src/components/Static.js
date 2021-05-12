import React from "react";

export const Static = () => {
  return (
    <div className="flex flex-col flex-nowrap items-center justify-center pt-7 pb-3">
      <div className="h-8 w-40 relative cursor-pointer mb-5">
        <div className="absolute inset-0 bg-blue-100 rounded-md shadow-2xl"></div>
        <div className="absolute inset-0 transform  hover:scale-90 transition duration-300">
          <div className="h-full w-full bg-blue-300 text-gray-800 text-base text-center font-bold rounded-md pt-1 shadow-2xl">
            <a href="https://infocafe.org/">website</a>
          </div>
        </div>
      </div>
      <div className="h-8 w-40 relative cursor-pointer mb-5">
        <div className="absolute inset-0 bg-blue-100 rounded-md shadow-2xl"></div>
        <div className="absolute inset-0 transform  hover:scale-90 transition duration-300">
          <div className="h-full w-full bg-blue-300 text-gray-800 text-base text-center font-bold rounded-md pt-1 shadow-2xl">
            <a href="https://www.instagram.com/infocafeni/">instagram</a>
          </div>
        </div>
      </div>
      <div className="h-8 w-40 relative cursor-pointer mb-5">
        <div className="absolute inset-0 bg-blue-100 rounded-md shadow-2xl"></div>
        <div className="absolute inset-0 transform  hover:scale-90 transition duration-300">
          <div className="h-full w-full bg-blue-300  text-gray-800 text-base text-center font-bold rounded-md pt-1 shadow-2xl">
            <a href="https://www.youtube.com/infocafe">youtube</a>
          </div>
        </div>
      </div>
      <div className="h-8 w-40 relative cursor-pointer mb-5">
        <div className="absolute inset-0 bg-blue-100 rounded-md shadow-2xl"></div>
        <div className="absolute inset-0 transform  hover:scale-90 transition duration-300">
          <div className="h-full w-full bg-blue-300 text-gray-800 text-base text-center font-bold rounded-md pt-1 shadow-2xl">
            <a href="https://www.twitch.tv/infocafe">twitter</a>
          </div>
        </div>
      </div>
      <div className="h-8 w-40 relative cursor-pointer mb-5">
        <div className="absolute inset-0 bg-blue-100 rounded-md shadow-2xl"></div>
        <div className="absolute inset-0 transform  hover:scale-90 transition duration-300">
          <div className="h-full w-full bg-blue-300 text-gray-800 text-base text-center font-bold rounded-md pt-1 shadow-2xl">
            <a href="https://twitter.com/Infocafe">twitch</a>
          </div>
        </div>
      </div>
    </div>
  );
};
