import React, { useContext, useEffect } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import ColorPaletteBox from "./ColorPalttes";
import { UserContext } from "@/UserContext";

const InputBox = ({ digit }) => {
  const { color } = useContext(UserContext);
  const digits = ["1st", "2nd", "3rd", "4th", "5th"];
  const colorPalette =
    digit >= 3
      ? // Note: This restriction prevents users from selecting gold or silver for the first digit, as they don't represent digit values but instead indicate tolerance values.
        Array.from({ length: 12 }, () => [])
      : Array.from({ length: 9 }, () => []);

  return (
    <>
      <div className="container border">
        <Popover>
          <PopoverTrigger>
            <div className="flex items-center border p-2 w-[350px] relative">
              <span>{digits[digit]} Digit Select Color</span>
              <div
                className={`color-box w-[150px] border-2 h-7 border-grey-600 my-2`}
                style={{
                  backgroundColor: color[digit] === "" ? "white" : color[digit],
                }}
              >
                sd
              </div>
            </div>
          </PopoverTrigger>
          <PopoverContent className="text-white bg-red-500 flex text-center ">
            <div className="flex flex-wrap">
              {colorPalette.map((color, index) => (
                <div key={index} className="w-1/4 p-2">
                  <ColorPaletteBox color={color} index={index} digit={digit} />
                </div>
              ))}
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </>
  );
};

export default InputBox;
