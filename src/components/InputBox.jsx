import React, { useContext, useEffect } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import ColorPaletteBox from "./ColorPalttes";
import { UserContext } from "@/UserContext";
import "@/assets/css/Animate-top.css";

const InputBox = ({ digit, length }) => {
  const { color } = useContext(UserContext);
  const digits = ["1st", "2nd", "3rd", "4th", "5th"];
  const colorPalette =
    digit >= 3
      ? // Note: This restriction prevents users from selecting gold or silver for the first digit, as they don't represent digit values but instead indicate tolerance values.
        Array.from({ length: 12 }, () => [])
      : Array.from({ length: 9 }, () => []);
  console.log(digit);
  console.log(length);

  return (
    <>
      {/* <div
        className={`container relative p-0 w-full${
          length - 1 === digit && digit != 0 ? "animate-top" : ""
        }`}
        style={{ backgroundColor: "#1f2937" }} >*/}

      <Popover>
        <PopoverTrigger style={{ width: "100%" }}>
          <div
            className={`flex items-center p-2 w-full text-base font-medium text-gray-300 border rounded ${
              length - 1 === digit && digit !== 0 ? "animate-top" : ""
            }`}
            style={{ backgroundColor: "#1f2937", borderColor: "rgb(60 64 70)" }}
          >
            <span className="ml-4">{digits[digit]} Digit Select Color</span>
            <div
              className={`color-box border-2 h-7 border-grey-500 my-2 mx-5 ml-auto w-[170px] rounded`}
              style={{
                backgroundColor: color[digit] === "" ? "white" : color[digit],
              }}
            ></div>
          </div>
        </PopoverTrigger>
        <PopoverContent className="text-white flex text-center absolute">
          <div className="flex flex-wrap">
            {colorPalette.map((color, index) => (
              <div key={index} className="w-1/4 p-2">
                <ColorPaletteBox color={color} index={index} digit={digit} />
              </div>
            ))}
          </div>
        </PopoverContent>
      </Popover>
      {/* </div> */}
    </>
  );
};

export default InputBox;
