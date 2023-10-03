const { createThemes } = require("tw-colors");

// Descriptive color variables
// Background
const FIORD = "#3A4764";
const EBONY_CLAY = "#232C43";
const MIRAGE = "#182034";

// Keys
const LYNCH = "#637097";
const EAST_BAY = "#404E72";
const PERSIAN_RED = "#D03F2F";
const OLD_BRICK = "#93261A";
const PEARL_BUSH = "#EAE3DC";
const NAPA = "#B4A597";

// Text
const RIVER_BED = "#444B5A";
const WHITE = "#FFF";

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
      }
    })
  ],
};
