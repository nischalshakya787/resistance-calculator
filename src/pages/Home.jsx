import React, { useContext, useEffect, useState } from "react";
import InputBox from "@/components/InputBox";
import { UserContext } from "@/UserContext";

const Home = () => {
  const { color } = useContext(UserContext);
  const [value, setValue] = useState(null);
  const colorDigit = {
    "#000000": 0, // black
    "#A52A2A": 1, // brown
    "#FF0000": 2, // red
    "#FFA500": 3, // orange
    "#FFFF00": 4, // yellow
    "#008000": 5, // green
    "#0000FF": 6, // blue
    "#8A2BE2": 7, // violet
    "#808080": 8, // gray
    "#FFFFFF": 9, // white
  };
  const colorMultiplier = {
    "#000000": Math.pow(10, 0), // black
    "#A52A2A": Math.pow(10, 1), // brown
    "#FF0000": Math.pow(10, 2), // red
    "#FFA500": Math.pow(10, 3), // orange
    "#FFFF00": Math.pow(10, 4), // yellow
    "#008000": Math.pow(10, 5), // green
    "#0000FF": Math.pow(10, 6), // blue
    "#8A2BE2": Math.pow(10, 7), // violet
    "#808080": Math.pow(10, 8), // gray
    "#FFFFFF": Math.pow(10, 9), // white
  };
  const tolerance = {
    "#A52A2A": "1%", // brown
    "#FF0000": "2%", // red
    "#008000": "0.5%", // green
    "#0000FF": "0.25%", // blue
    "#8A2BE2": "0.1%", // violet
    gold: "5%",
    silver: "10%",
  };
  useEffect(() => {
    let filteredArray = color.filter((item) => item !== "");
    if (filteredArray.length != 0) {
      let resistance = "";
      if (filteredArray.length <= 2) {
        // Concatenate the digits if there are only
        for (let index = 0; index < filteredArray.length; index++) {
          const colorCode = filteredArray[index];
          resistance += colorDigit[colorCode];
        }
        resistance = `${resistance} Ω`;
      } else if (filteredArray.length === 3) {
        resistance = parseInt(value, 10) * colorMultiplier[filteredArray[2]];
        resistance = `${resistance} Ω`;
      } else if (filteredArray.length === 4) {
        if (tolerance.hasOwnProperty(filteredArray[3])) {
          for (let index = 0; index < 2; index++) {
            const colorCode = filteredArray[index];
            resistance += colorDigit[colorCode];
          }
          resistance = resistance * colorMultiplier[filteredArray[2]];
          resistance = `${resistance} Ω ± ${tolerance[filteredArray[3]]}`;
        } else {
          for (let index = 0; index < 3; index++) {
            const colorCode = filteredArray[index];
            resistance += colorDigit[colorCode];
          }
          resistance =
            parseInt(resistance, 10) * colorMultiplier[filteredArray[3]];
          resistance = `${resistance} Ω`;
        }
      } else {
        for (let index = 0; index < 3; index++) {
          const colorCode = filteredArray[index];
          resistance += colorDigit[colorCode];
        }
        resistance =
          parseInt(resistance, 10) * colorMultiplier[filteredArray[3]];
        resistance = `${resistance} Ω ± ${tolerance[filteredArray[4]]}`;
      }
      setValue(resistance);
    } else {
      setValue("0 Ω");
    }
  }, [color]);

  return (
    <div className="flex flex-col md:flex-row container bg-black h-[100vh] text-white">
      <div className="md:w-1/2 p-4">
        {color.map((digit, index) => (
          <InputBox digit={index} key={index} color={color[index]} />
        ))}
      </div>
      <div className="md:w-1/2 p-4">{value}</div>
    </div>
  );
};

export default Home;
