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
  bg: {
    primary: FIORD,
    secondary: EBONY_CLAY,
    tertiary: MIRAGE,
  },
  keys: {
    primary: LYNCH,
    primaryShadow: EAST_BAY,
    secondary: PERSIAN_RED,
    secondaryShadow: OLD_BRICK,
    tertiary: PEARL_BUSH,
    tertiaryShadow: NAPA,
  },
  text: {
    primary: RIVER_BED,
    secondary: WHITE,
  },
};


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {},
  plugins: [
    createThemes({
      "theme-1": {
        fiord: FIORD,
        "ebony-clay": EBONY_CLAY,
        mirage: MIRAGE,
        lynch: LYNCH,
        "east-bay": EAST_BAY,
        "persian-red": PERSIAN_RED,
        "old-brick": OLD_BRICK,
        "pearl-bush": PEARL_BUSH,
        napa: NAPA,
        "river-bed": RIVER_BED,
        white: WHITE,
        "bg-primary": theme1.bg.primary,
        "bg-secondary": theme1.bg.secondary,
        "bg-tertiary": theme1.bg.tertiary,
        "key-primary": theme1.keys.primary,
        "key-primary-sh": theme1.keys.primaryShadow,
        "key-secondary": theme1.keys.secondary,
        "key-secondary-sh": theme1.keys.secondaryShadow,
        "key-tertiary": theme1.keys.tertiary,
        "key-tertiary-sh": theme1.keys.tertiaryShadow,
        "text-primary": theme1.text.primary,
        "text-secondary": theme1.text.primary,
        "text-tertiary": theme1.text.primary
      }
    })
  ],
};
