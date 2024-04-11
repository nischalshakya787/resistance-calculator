import React, { useContext } from "react";
import { UserContext } from "@/UserContext";
import { colors, toleranceColor, colorCodeToName } from "@/data/ColorCode";
const ColorPaletteBox = ({ index, digit }) => {
  // index: Index of the color in the array.
  // digit: Indicates which digit is being selected. For example, if digit = 0, it refers to the 1st digit; if digit = 1, it refers to the 2nd digit, and so on.

  const { color, setColor } = useContext(UserContext);
  const handleColorSelect = () => {
    const newColorArray = [...color]; // Copying the color in new array
    newColorArray[digit] = digit != 4 ? colors[index] : toleranceColor[index]; //Storing what color is selected
    // This condition will ensure that it wont created multiple InputBox if this condition doesn't exist if user change the color then it will create a new inputBox simultaneously
    // condition 1 = User just selected the color that means the digit = newColorArray.length and (if condition) will append the color array with an empty string.
    // condition 2 = User is trying to change the color which user has already selected earlier. since above has increased the length of the color array the (newColorArray.length === digit) will return false so else condition will be executed.
    if (newColorArray.length - 1 === digit) {
      digit < 4 ? setColor([...newColorArray, ""]) : setColor(newColorArray);
    } else {
      setColor(newColorArray);
    }
  };

  return (
    <div
      className="shadow-md transform transition-transform hover:scale-105 w-[50px] h-[50px] flex items-center justify-center cursor-pointer rounded"
      style={{
        backgroundColor: digit != 4 ? colors[index] : toleranceColor[index],
      }} // This will display different colors in palette box
      onClick={handleColorSelect}
    >
      <span className="opacity-0 hover:opacity-100 transition-all duration-300 w-full h-full m-0 flex items-center justify-center">
        {digit != 4
          ? colorCodeToName[colors[index]]
          : colorCodeToName[toleranceColor[index]]}
      </span>
    </div>
  );
};

export default ColorPaletteBox;
