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

const descriptiveTheme2 = {
  // Background
  MERCURY: "#E6E6E6",
  SWISS_COFFEE: "#D1CCCC",
  GALLERY: "#EDEDED",
  // Keys
  PARADISO: "#377F86",
  BLUEMINE: "#1B5F65",
  BURNT_ORANGE: "#CA5502",
  PERU_TAN: "#893901",
  WESTAR: "#E5E4E1",
  ZORBA: "#A69D91",
  // Text
  ARMADILLO: "#35352C",
  WHITE: "#FFF",
};

const descriptiveTheme3 = {
  // Background
  VIOLET: "#160628",
  VIOLET_DARK: "hsl(268, 71%, 12%)",
  // Keys
  WINDSOR: "#58077D",
  ELETRIC_VIOLET: "#BC15F4",
  ROBIN_EGG_BLUE: "#00E0D1",
  AQUAMARINE: "#6CF9F2",
  GRAPE: "#341C4F",
  SEANCE: "#871C9C",
  // Text
  BRIGHT_SUN: "#FFE53D",
  SHARK: "#1B2428",
  WHITE: "#FFF"
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

const theme2 = {
  primary: descriptiveTheme2.MERCURY,
  "primary-dark": descriptiveTheme2.SWISS_COFFEE,
  "primary-darker": descriptiveTheme2.GALLERY,
  "primary-light": descriptiveTheme2.BLUEMINE,
  "primary-lighter": descriptiveTheme2.PARADISO,
  secondary: descriptiveTheme2.BURNT_ORANGE,
  "secondary-dark": descriptiveTheme2.PERU_TAN,
  tertiary: descriptiveTheme2.WESTAR,
  "tertiary-dark": descriptiveTheme2.ZORBA,
  quarternary: descriptiveTheme2.ARMADILLO,
  "quarternary-light": descriptiveTheme2.ARMADILLO,
};
const theme3 = {
  primary: descriptiveTheme3.VIOLET,
  "primary-dark": descriptiveTheme3.VIOLET_DARK,
  "primary-darker": descriptiveTheme3.VIOLET_DARK,
  "primary-light": descriptiveTheme3.ELETRIC_VIOLET,
  "primary-lighter": descriptiveTheme3.WINDSOR,
  secondary: descriptiveTheme3.ROBIN_EGG_BLUE,
  "secondary-dark": descriptiveTheme3.AQUAMARINE,
  tertiary: descriptiveTheme3.GRAPE,
  "tertiary-dark": descriptiveTheme3.SEANCE,
  quarternary: descriptiveTheme3.BRIGHT_SUN,
  "quarternary-light": descriptiveTheme3.BRIGHT_SUN,
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {},
  plugins: [
    createThemes({
      "theme-1": theme1,
      "theme-2": theme2,
      "theme-3": theme3,
    }),
  ],
};
