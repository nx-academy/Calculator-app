const { createThemes } = require("tw-colors");

// Descriptive color variables
const firstTheme = {
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
  primary: FIORD,
  "primary-dark": EBONY_CLAY,
  "primary-darker": MIRAGE,
  "primary-light": EAST_BAY,
  "primary-lighter": LYNCH,
  secondary: PERSIAN_RED,
  "secondary-dark": OLD_BRICK,
  tertiary: PEARL_BUSH,
  "tertiary-dark": NAPA,
};

const theme2 = {};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {},
  plugins: [
    createThemes({
      "theme-1": {
        primary: FIORD,
        "primary-dark": EBONY_CLAY,
        "primary-darker": MIRAGE,
        "primary-light": EAST_BAY,
        "primary-lighter": LYNCH,
        secondary: PERSIAN_RED,
        "secondary-dark": OLD_BRICK,
        tertiary: PEARL_BUSH,
        "tertiary-dark": NAPA,
        "pearl-bush": PEARL_BUSH,
        napa: NAPA,
        "river-bed": RIVER_BED,
        white: WHITE,
      },
    }),
  ],
};
