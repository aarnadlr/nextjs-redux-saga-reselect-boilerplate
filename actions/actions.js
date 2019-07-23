export const actionTypes = {
  FAILURE: 'FAILURE',
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  RESET: 'RESET',
  LOAD_DATA: 'LOAD_DATA',
  LOAD_DATA_SUCCESS: 'LOAD_DATA_SUCCESS',
  BUTTON_CLICKED: '[page]BUTTON CLICKED!',
  // START_CLOCK: 'START_CLOCK',
  // TICK_CLOCK: 'TICK_CLOCK'
};

// action creator function
export function buttonClicked() {
  return {
    type: actionTypes.BUTTON_CLICKED,
  };
}

// action creator function
export function failure(error) {
  return {
    type: actionTypes.FAILURE,
    error,
  };
}

// action creator function
export function increment() {
  return { type: actionTypes.INCREMENT };
}

// action creator function
export function decrement() {
  return { type: actionTypes.DECREMENT };
}

// action creator function
export function reset() {
  return { type: actionTypes.RESET };
}

// action creator function
export function loadData() {
  return { type: actionTypes.LOAD_DATA };
}

// action creator function
export function loadDataSuccess(data) {
  return {
    type: actionTypes.LOAD_DATA_SUCCESS,
    data,
  };
}

// export function startClock () {
//   return { type: actionTypes.START_CLOCK }
// }

// export function tickClock (isServer) {
//   return {
//     type: actionTypes.TICK_CLOCK,
//     light: !isServer,
//     ts: Date.now()
//   }
// }
