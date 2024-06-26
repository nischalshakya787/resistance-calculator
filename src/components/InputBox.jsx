import React, { useContext } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import ColorPaletteBox from "./ColorPaletteBox";
import { UserContext } from "@/UserContext";
import "@/assets/css/Animate-top.css";

const InputBox = ({ digit, length }) => {
  const { color } = useContext(UserContext);
  const digits = ["1st", "2nd", "3rd", "4th", "5th"];
  const colorPalette =
    digit >= 3
      ? digit === 4
        ? Array.from({ length: 7 }, () => [])
        : Array.from({ length: 12 }, () => [])
      : Array.from({ length: 9 }, () => []);
  console.log(color);
  return (
    <>
      <Popover>
        <PopoverTrigger style={{ width: "100%", zIndex: 1 }}>
          <div
            className={`flex items-center p-2 w-full text-base font-medium text-gray-300 border rounded ${
              length - 1 === digit && digit !== 0 ? "animate-top" : ""
            }`}
            style={{ backgroundColor: "#1f2937", borderColor: "rgb(60 64 70)" }}
          >
            <span className="ml-4">Select Color for {digits[digit]} Digit</span>
            <div
              className={` border h-7 border-grey-500 my-2 mx-5 ml-auto w-[170px] rounded`}
              style={{
                backgroundColor: color[digit] === "" ? "white" : color[digit],
              }}
            ></div>
          </div>
        </PopoverTrigger>
        <PopoverContent
          className="text-white flex text-center absolute border-none"
          style={{ backgroundColor: "#1f2937" }}
        >
          <div className="flex flex-wrap">
            {colorPalette.map((color, index) => (
              <div key={index} className="w-1/4 p-2">
                <ColorPaletteBox color={color} index={index} digit={digit} />
              </div>
            ))}
          </div>
        </PopoverContent>
      </Popover>
    </>
  );
};

export default InputBox;
