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

export { tolerance, colorDigit, colorMultiplier, colors };
