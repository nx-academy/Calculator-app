const { createThemes } = require("tw-colors");

// Descriptive color variables
const descriptiveTheme1 = {
  // Background
  FIORD: "#3A4764",
  EBONY_CLAY: "#232C43",
  MIRAGE: "#182034",

  // Keys
  LYNCH: "#637097",
  EAST_BAY: "#404E72",
  PERSIAN_RED: "#D03F2F",
  OLD_BRICK: "#93261A",
  PEARL_BUSH: "#EAE3DC",
  NAPA: "#B4A597",

  // Text
  RIVER_BED: "#444B5A",
  WHITE: "#FFF",
};

// Functional color variables
const theme1 = {
  primary: descriptiveTheme1.FIORD,
  "primary-dark": descriptiveTheme1.EBONY_CLAY,
  "primary-darker": descriptiveTheme1.MIRAGE,
  "primary-light": descriptiveTheme1.EAST_BAY,
  "primary-lighter": descriptiveTheme1.LYNCH,
  secondary: descriptiveTheme1.PERSIAN_RED,
  "secondary-dark": descriptiveTheme1.OLD_BRICK,
  tertiary: descriptiveTheme1.PEARL_BUSH,
  "tertiary-dark": descriptiveTheme1.NAPA,
  quarternary: descriptiveTheme1.RIVER_BED,
  "quarternary-light": descriptiveTheme1.WHITE,
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {},
  plugins: [
    createThemes({
      "theme-1": theme1,
    }),
  ],
};
