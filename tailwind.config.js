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
    primary: "hsl(222, 26%, 31%)",
    secondary: "hsl(223, 31%, 20%)",
    tertiary: "hsl(224, 36%, 15%)",
  },
  keys: {
    primary: "hsl(225, 21%, 49%)",
    primaryShadow: "hsl(224, 28%, 35%)",
    secondary: "hsl(6, 63%, 50%)",
    secondaryShadow: "hsl(6, 70%, 34%)",
    tertiary: "hsl(30, 25%, 89%)",
    tertiaryShadow: "hsl(28, 16%, 65%)",
  },
  text: {
    primary: "hsl(221, 14%, 31%)",
    secondary: "hsl(0, 0%, 100%)",
  },
};

const theme2 = {
  bg: {
    primary: "hsl(0, 0%, 90%)",
    secondary: "hsl(0, 5%, 81%)",
    tertiary: "hsl(0, 0%, 93%)",
  },
  keys: {
    primary: "hsl(185, 42%, 37%)",
    primaryShadow: "hsl(185, 58%, 25%)",
    secondary: "hsl(25, 98%, 40%)",
    secondaryShadow: "hsl(25, 99%, 27%)",
    tertiary: "hsl(45, 7%, 89%)",
    tertiaryShadow: "hsl(35, 11%, 61%)",
  },
  text: {
    primary: "hsl(60, 10%, 19%)",
    secondary: "hsl(0, 0%, 100%)",
  },
};

const theme3 = {
  bg: {
    primary: "hsl(268, 75%, 9%)",
    secondary: "hsl(268, 71%, 12%)",
    tertiary: "hsl(268, 71%, 12%)",
  },
  keys: {
    primary: "hsl(281, 89%, 26%)",
    primaryShadow: "hsl(285, 91%, 52%)",
    secondary: "hsl(176, 100%, 44%)",
    secondaryShadow: "hsl(177, 92%, 70%)",
    tertiary: "hsl(268, 47%, 21%)",
    tertiaryShadow: "hsl(290, 70%, 36%)",
  },
  text: {
    primary: "hsl(52, 100%, 62%",
    secondary: "hsl(0, 0%, 100%)",
  },
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {},
  plugins: [
    createThemes({
      "theme-1": {
        "bg-primary": theme1.bg.primary,
        "bg-secondary": theme1.bg.secondary,
        "bg-tertiary": theme1.bg.tertiary,
        "key-primary": theme1.keys.primary,
        "key-primary-sh": theme1.keys.primaryShadow,
        "key-secondary": theme1.keys.secondary,
        "key-secondary-sh": theme1.keys.secondaryShadow,
        "key-tertiary": theme1.keys.tertiary,
        "key-tertiary-sh": theme1.keys.tertiaryShadow,
        riverBed: RIVER_BED,
        white: WHITE,
      },
      "theme-2": {
        "bg-primary": theme2.bg.primary,
        "bg-secondary": theme2.bg.secondary,
        "bg-tertiary": theme2.bg.tertiary,
        "key-primary": theme2.keys.primary,
        "key-primary-sh": theme2.keys.primaryShadow,
        "key-secondary": theme2.keys.secondary,
        "key-secondary-sh": theme2.keys.secondaryShadow,
        "key-tertiary": theme2.keys.tertiary,
        "key-tertiary-sh": theme2.keys.tertiaryShadow,
        riverBed: RIVER_BED,
        white: WHITE,
      },
      "theme-3": {
        "bg-primary": theme3.bg.primary,
        "bg-secondary": theme3.bg.secondary,
        "bg-tertiary": theme3.bg.tertiary,
        "key-primary": theme3.keys.primary,
        "key-primary-sh": theme3.keys.primaryShadow,
        "key-secondary": theme3.keys.secondary,
        "key-secondary-sh": theme3.keys.secondaryShadow,
        "key-tertiary": theme3.keys.tertiary,
        "key-tertiary-sh": theme3.keys.tertiaryShadow,
        riverBed: RIVER_BED,
        white: WHITE,
      },
    }),
  ],
};
