import React, { useContext } from "react";
import { UserContext } from "@/UserContext";
const ColorPaletteBox = ({ index, digit }) => {
  const colors = [
    "#000000", // black
    "#A52A2A", // brown
    "#FF0000", // red
    "#FFA500", // orange
    "#FFFF00", // yellow
    "#008000", // green
    "#0000FF", // blue
    "#8A2BE2", // violet
    "#808080", // gray
    "#FFFFFF", // white
    "gold", // gold
    "silver", // silver
  ];
  const { color, setColor } = useContext(UserContext);
  const buttonClicked = () => {
    const newColorArray = [...color];
    newColorArray[digit] = colors[index];

    setColor(newColorArray);
  };

  return (
    <div
      className="border w-[50px] h-[50px] flex items-center justify-center cursor-pointer rounded"
      style={{ backgroundColor: colors[index] }}
      onClick={buttonClicked}
    >
      <span className="opacity-0 hover:opacity-100 transition-all duration-300 w-full h-full m-0 flex items-center justify-center">
        {colors[index]}
      </span>
    </div>
  );
};

export default ColorPaletteBox;
