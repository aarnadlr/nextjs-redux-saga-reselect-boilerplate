import { actionTypes } from './actions/actions';

// Initial state
export const initialState = {
  color: 'palegoldenrod',
  count: 9,
};

// Reducer
function reducer(state = initialState, action) {
  switch (action.type) {
    // 1
    case actionTypes.FAILURE:
      return {
        ...state,
        ...{ error: action.error },
      };

    // 2
    case actionTypes.INCREMENT:
      return {
        ...state,
        ...{ count: state.count + 1 },
      };
    case actionTypes.INC_BY_ONE:
      return {
        ...state,
        ...{ count: state.count + action.payload },
      };

    case actionTypes.INC_BY_TEN:
      return {
        ...state,
        count: state.count + action.payload,
      };

    case 'INC_200':
      return {
        ...state,
        count: state.count + action.payload,
      };

    // 3
    case actionTypes.DECREMENT:
      return {
        ...state,
        ...{ count: state.count - 1 },
      };

    // 4
    case actionTypes.RESET:
      return {
        ...state,
        ...{ count: initialState.count },
      };

    // 5
    case actionTypes.LOAD_DATA_SUCCESS:
      return {
        ...state,
        ...{ placeholderData: action.data },
      };

    // case actionTypes.TICK_CLOCK:
    //   return {
    //     ...state,
    //     ...{ lastUpdate: action.ts, light: !!action.light }
    //   };

    default:
      return state;
  }
}

export default reducer;
