import React, { useContext, useEffect, useState } from "react";
import InputBox from "@/components/InputBox";
import { UserContext } from "@/UserContext";
import background from "@/assets/image/resistor.png";
import { colorDigit, colorMultiplier, tolerance } from "../data/ColorCode";
const Home = () => {
  const { color } = useContext(UserContext);
  const [value, setValue] = useState(null);
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
    <div className="flex flex-col md:flex-row container h-[100vh] ">
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
          {/* <div className="bg-black h-screen flex justify-center items-center">
            <img src={background} class="blend-multiply" alt="Your Image" />
          </div> */}
          <table
            width={300}
            cellPadding={0}
            cellSpacing={0}
            background={background}
            style={{ mixBlendMode: "multiply" }}
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
