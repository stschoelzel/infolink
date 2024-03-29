import React from "react";

export const Static = () => {
  return (
    <div className="flex flex-col flex-nowrap items-center justify-center pt-1 pb-1">
      <Button url="https://infocafe.org" label="website" />
      <Button url="https://www.instagram.com/infocafeni" label="instagram" />
      <Button url="https://www.facebook.com/infocafe" label="facebook" />
      <Button url="https://twitter.com/Infocafe" label="twitter" />
      <Button url="https://www.youtube.com/infocafe" label="youtube" />
      <Button url="https://www.twitch.tv/infocafe" label="twitch" />
    </div>
  );
};

const Button = ({ url, label }) => {
  const [color, setColor] = React.useState("#f1ea75");
  return (
    <div
      className="h-8 w-40 relative cursor-pointer mb-5"
      onMouseEnter={() =>
        setColor(colors[Math.round(Math.random() * (colors.length - 1))])
      }
    >
      <div
        style={{ background: color }}
        className={`absolute inset-0  rounded-md shadow-2xl`}
      ></div>
      <div className="absolute inset-0 transform  hover:scale-90 transition duration-300">
        <div className="h-full w-full bg-Türkis text-Dunkelblau text-center font-headline rounded-md pt-1 shadow-2xl">
          <a href={url}>{label}</a>
        </div>
      </div>
    </div>
  );
};

const colors = ["#f1ea75", "#ef7983"];
