import React, { useContext } from "react";
import { UserContext } from "@/UserContext";
const ColorPaletteBox = ({ index }) => {
  // Define an array of colors for the palette
  const colors = [
    "white",
    "#00FF00",
    "#0000FF",
    "#FFFF00",
    "#FF00FF",
    "#00FFFF",
    "white",
    "#00FF00",
    "#0000FF",
    "#FFFF00",
    "#FF00FF",
    "#00FFFF",
  ];
  const { color, setColor } = useContext(UserContext);
  const buttonClicked = () => {
    const newColorArray = [...color];
    newColorArray[index] = colors[index];

    setColor(newColorArray);
  };

  return (
    <div
      className="border w-[50px] h-[50px] flex items-center justify-center cursor-pointer rounded "
      onClick={buttonClicked}
    >
      <span className="opacity-0 hover:opacity-100 transition-all duration-300 w-full h-full m-0 flex items-center justify-center">
        {colors[index]}
      </span>
    </div>
  );
};

export default ColorPaletteBox;
