import React, { useContext, useEffect } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import InputBox from "@/components/InputBox";
import { UserContext } from "@/UserContext";

const Home = () => {
  const { color, setColor } = useContext(UserContext);
  useEffect(() => {
    console.log(color);
  }, [color]);

  return (
    <div className="flex flex-col md:flex-row container bg-black h-[100vh] text-white">
      <div className="md:w-1/2 p-4">
        {color.map((digit, index) => (
          <InputBox digit={index} key={index} color={color[index]} />
        ))}
      </div>
      <div className="md:w-1/2 p-4">Second Div</div>
    </div>
  );
};

export default Home;
