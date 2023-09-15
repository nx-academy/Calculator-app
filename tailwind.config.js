// Background
const FIORD = "#3A4764"
const EBONY_CLAY = "#232C43"
const MIRAGE = "#182034"

// Keys
const LYNCH = "#637097"
const EAST_BAY = "#404E72"
const PERSIAN_RED = "#D03F2F"
const OLD_BRICK = "#93261A"
const PEARL_BUSH = "#EAE3DC"
const NAPA = "#B4A597"

// Text
const RIVER_BED = "#444B5A"
const WHITE = "#FFF"

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    colors: {
      fiord: FIORD,
      ebonyClay: EBONY_CLAY,
      mirage: MIRAGE,
      lynch: LYNCH,
      eastBay: EAST_BAY,
      persianRed: PERSIAN_RED,
      oldBrick: OLD_BRICK,
      pearlBush: PEARL_BUSH,
      napa: NAPA,
      riverBed: RIVER_BED,
      white: WHITE
    }
  },
  plugins: [],
}

