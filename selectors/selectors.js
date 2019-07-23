import { createSelector } from 'reselect';
// Chrome Extension: Reselect DevTools
import { registerSelectors } from 'reselect-tools';

// pluck fn: return plucked state
const getColor = state => state.color;
// transform fn: takes in the plucked state, and returns transformed state
const transformColor = color => `the color is ${color}!!`;
export const selectNewColorState = createSelector(
  getColor,
  transformColor
);

// pluck:
const getCount = state => state.count;
// transform:
const transformCount = color => color;
export const selectCount = createSelector(
  getCount,
  transformCount
);

// Chrome Extension: Reselect DevTools
registerSelectors({ selectNewColorState });
