import React, { useContext, useEffect, useState } from "react";
import InputBox from "@/components/InputBox";
import { UserContext } from "@/UserContext";
import background from "@/assets/image/resistor.png";
import { colorDigit, colorMultiplier, tolerance } from "../data/ColorCode";
import Navbar from "@/components/NavBar";
import { Button } from "@/components/ui/button";

const Home = () => {
  const { color, setColor } = useContext(UserContext);
  const [value, setValue] = useState(null);

  useEffect(() => {
    let filteredArray = color.filter((item) => item !== ""); // To remove the empty strings
    if (filteredArray.length != 0) {
      let resistance = "";
      // If user has only selected color for 2 digits
      if (filteredArray.length <= 2) {
        for (let index = 0; index < filteredArray.length; index++) {
          const colorCode = filteredArray[index];
          resistance += colorDigit[colorCode];
        }
        resistance = `${resistance} Ω`;
      } else if (filteredArray.length === 3) {
        // If user has only selected color for 3 digits
        for (let index = 0; index < 2; index++) {
          const colorCode = filteredArray[index];
          resistance += colorDigit[colorCode];
        }
        resistance =
          parseInt(resistance, 10) * colorMultiplier[filteredArray[2]];
        if (resistance > 1000) {
          resistance = `${resistance / 1000}k Ω`;
        } else {
          resistance = `${resistance} Ω`;
        }
      } else if (filteredArray.length === 4) {
        // If user has only selected color for 4 digits
        if (tolerance.hasOwnProperty(filteredArray[3])) {
          //If the selected color has tolerance then this code will execute
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
        // If user has only selected color for 5 digits
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
  const colorLength = color.length;
  return (
    <>
      <div
        className="container p-0 h-[100vh]"
        style={{ backgroundColor: "rgb(60 66 75)" }}
      >
        <Navbar />
        <div className="flex flex-col md:flex-row container  ">
          <div className="md:w-1/2 p-4 z-1">
            <span className="text-gray-300 font-medium text-lg p-4 ">
              Please Select Color To Calculate The Resistance Of Resistor
            </span>
            <div className="input-box mt-2">
              {color.map((digit, index) => (
                <InputBox digit={index} key={index} length={colorLength} />
              ))}
            </div>
          </div>
          <div className="md:w-1/2 p-4 flex items-center flex-col">
            <div className="resistor-box my-8">
              <table
                width={300}
                cellPadding={0}
                cellSpacing={0}
                background={background}
                style={{}}
              >
                <tbody>
                  <tr>
                    <div
                      style={{ width: "76px", display: "inline-block" }}
                    ></div>
                    <div
                      style={{
                        display: "inline-block",
                        width: "12px",
                        height: "59px",
                        margin: "1px 0px",
                        backgroundColor: "#000000",
                      }}
                    ></div>
                    <div
                      style={{ width: "12px", display: "inline-block" }}
                    ></div>
                    <div
                      style={{
                        display: "inline-block",
                        width: "12px",
                        height: "49px",
                        margin: "6px 0px",
                        backgroundColor: "#ff0000",
                      }}
                    ></div>
                    <div
                      style={{ width: "12px", display: "inline-block" }}
                    ></div>
                    <div
                      style={{
                        display: "inline-block",
                        width: "12px",
                        height: "49px",
                        margin: "6px 0px",
                        backgroundColor: "#6495ed",
                      }}
                    ></div>
                    <div
                      style={{ width: "62px", display: "inline-block" }}
                    ></div>
                    <div
                      style={{
                        display: "inline-block",
                        width: "12px",
                        height: "49px",
                        margin: "6px 0px",
                        backgroundColor: "#cfb53b",
                      }}
                    ></div>
                    <div
                      style={{ width: "12px", display: "inline-block" }}
                    ></div>
                    <div
                      style={{
                        display: "inline-block",
                        width: "12px",
                        height: "59px",
                        margin: "1px 0px",
                        backgroundColor: "#cfb53b",
                      }}
                    ></div>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="value-box text-center ">
              <p className="font-medium text-white text-[1.4rem]">
                Resistance Value
              </p>
              <p className="text-[1.8rem] font-medium text-white">{value}</p>
              <Button
                variant="destructive"
                className="my-5"
                onClick={() => {
                  setColor([""]);
                }}
              >
                Reset
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
