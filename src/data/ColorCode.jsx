const colorDigit = {
  "#000000": 0, // black
  "#954535": 1, // brown
  "#D22B2B": 2, // red
  "#FF5F1F": 3, // orange
  "#FFBF00": 4, // yellow
  "#228B22": 5, // green
  "#6495ED": 6, // blue
  "#7F00FF": 7, // violet
  "#848884": 8, // gray
  "#FFFFFF": 9, // white
};
const colorMultiplier = {
  "#000000": Math.pow(10, 0), // black
  "#954535": Math.pow(10, 1), // brown
  "#D22B2B": Math.pow(10, 2), // red
  "#FF5F1F": Math.pow(10, 3), // orange
  "#FFBF00": Math.pow(10, 4), // yellow
  "#228B22": Math.pow(10, 5), // green
  "#6495ED": Math.pow(10, 6), // blue
  "#7F00FF": Math.pow(10, 7), // violet
  "#848884": Math.pow(10, 8), // gray
  "#FFFFFF": Math.pow(10, 9), // white
};
const tolerance = {
  "#954535": "1%", // brown
  "#D22B2B": "2%", // red
  "#228B22": "0.5%", // green
  "#6495ED": "0.25%", // blue
  "#7F00FF": "0.1%", // violet
  "#FFD700": "5%",
  "#C0C0C0": "10%",
};
const toleranceColor = [
  "#954535", // brown
  "#D22B2B", // red
  "#228B22", // green
  "#6495ED", // blue
  "#7F00FF", // violet
  "#FFD700",
  "#C0C0C0",
];
const colors = [
  "#000000", // black
  "#954535", // brown
  "#D22B2B", // red
  "#FF5F1F", // orange
  "#FFBF00", // yellow
  "#228B22", // green
  "#6495ED", // blue
  "#7F00FF", // violet
  "#848884", // gray
  "#FFFFFF", // white
  "#FFD700", // gold
  "#C0C0C0", // silver
];
const colorCodeToName = {
  "#000000": "black",
  "#954535": "brown",
  "#D22B2B": "red",
  "#FF5F1F": "orange",
  "#FFBF00": "yellow",
  "#228B22": "green",
  "#6495ED": "blue",
  "#7F00FF": "violet",
  "#848884": "gray",
  "#FFFFFF": "white",
  "#FFD700": "gold",
  "#C0C0C0": "silver",
};

export {
  tolerance,
  colorDigit,
  colorMultiplier,
  colors,
  toleranceColor,
  colorCodeToName,
};
