import React, { useContext, useEffect, useState } from "react";
import InputBox from "@/components/InputBox";
import { UserContext } from "@/UserContext";
import background from "@/assets/image/resistor.png";

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
        for (let index = 0; index < filteredArray.length; index++) {
          const colorCode = filteredArray[index];
          resistance += colorDigit[colorCode];
        }
        resistance = `${resistance} Ω`;
      } else if (filteredArray.length === 3) {
        for (let index = 0; index < 2; index++) {
          const colorCode = filteredArray[index];
          resistance += colorDigit[colorCode];
        }
        console.log(resistance);
        resistance =
          parseInt(resistance, 10) * colorMultiplier[filteredArray[2]];
        if (resistance > 1000) {
          resistance = `${resistance / 1000}k Ω`;
        } else {
          resistance = `${resistance} Ω`;
        }
      } else if (filteredArray.length === 4) {
        if (tolerance.hasOwnProperty(filteredArray[3])) {
          for (let index = 0; index < 2; index++) {
            const colorCode = filteredArray[index];
            resistance += colorDigit[colorCode];
          }
          resistance = resistance * colorMultiplier[filteredArray[2]];
          if (resistance > 1000) {
            resistance = `${resistance / 1000}k Ω ± ${
              tolerance[filteredArray[3]]
            }`;
          } else {
            resistance = `${resistance} Ω ± ${tolerance[filteredArray[3]]}`;
          }
        } else {
          for (let index = 0; index < 3; index++) {
            const colorCode = filteredArray[index];
            resistance += colorDigit[colorCode];
          }
          resistance =
            parseInt(resistance, 10) * colorMultiplier[filteredArray[3]];
          if (resistance > 1000) {
            resistance = `${resistance / 1000}k Ω`;
          } else {
            resistance = `${resistance} Ω`;
          }
        }
      } else {
        for (let index = 0; index < 3; index++) {
          const colorCode = filteredArray[index];
          resistance += colorDigit[colorCode];
        }
        resistance =
          parseInt(resistance, 10) * colorMultiplier[filteredArray[3]];
        if (resistance > 1000) {
          resistance = `${resistance / 1000}k Ω ± ${
            tolerance[filteredArray[4]]
          }`;
        } else {
          resistance = `${resistance} Ω ± ${tolerance[filteredArray[4]]}`;
        }
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
      <div className="md:w-1/2 p-4">
        <div className="value-box">
          <span>{value}</span>
        </div>
        <div className="resistor-box">
          <table
            width={300}
            cellPadding={0}
            cellSpacing={0}
            background={background}
          >
            <tbody>
              <tr>
                <div style={{ width: "76px", display: "inline-block" }}></div>
                <div
                  style={{
                    display: "inline-block",
                    width: "12px",
                    height: "59px",
                    margin: "1px 0px",
                    backgroundColor: "#000000",
                  }}
                ></div>
                <div style={{ width: "12px", display: "inline-block" }}></div>
                <div
                  style={{
                    display: "inline-block",
                    width: "12px",
                    height: "49px",
                    margin: "6px 0px",
                    backgroundColor: "#ff0000",
                  }}
                ></div>
                <div style={{ width: "12px", display: "inline-block" }}></div>
                <div
                  style={{
                    display: "inline-block",
                    width: "12px",
                    height: "49px",
                    margin: "6px 0px",
                    backgroundColor: "#6495ed",
                  }}
                ></div>
                <div style={{ width: "62px", display: "inline-block" }}></div>
                <div
                  style={{
                    display: "inline-block",
                    width: "12px",
                    height: "49px",
                    margin: "6px 0px",
                    backgroundColor: "#cfb53b",
                  }}
                ></div>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;
