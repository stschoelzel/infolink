import React from "react";

export const Static = () => {
  return (
      <div className="flex flex-col flex-nowrap items-center justify-center pt-7 pb-3">
      <Button url="https://twitter.com/Infocafe" label="twitch" />
      <Button url="https://infocafe.org" label="website" />
      <Button url="https://www.instagram.com/infocafeni" label="instagram" />
      <Button url="https://www.youtube.com/infocafe" label="youtube" />
      <Button url="https://twitter.com/Infocafe" label="twitter" />
    </div>
  );
};

const Button = ({ url, label }) => {
  return (
    <div className="h-8 w-40 relative cursor-pointer mb-5">
      <div className="absolute inset-0 bg-Gelb rounded-md shadow-2xl"></div>
      <div className="absolute inset-0 transform  hover:scale-90 transition duration-300">
        <div className="h-full w-full bg-Türkis text-Dunkelblau text-center font-custom rounded-md pt-1 shadow-2xl">
          <a href={url}>{label}</a>
        </div>
      </div>
    </div>
  );
};
