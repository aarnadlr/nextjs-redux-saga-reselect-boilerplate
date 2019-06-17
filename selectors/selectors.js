import { createSelector } from "reselect";

//pluck fn: return plaucked state
const getColor = state => state.color;

//transform fn: takes in the plucked state, and returns transformed state
const transformColor = color => {
  return `the color is ${color}!!`;
};

export const selectNewColorState = createSelector(
  getColor,
  transformColor
);
