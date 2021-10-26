// // Action
// {
//   type: 'COUNTER_ADD',
//   paylod: 123,
// }

const COUNTER_INC = "counter/COUNTER_INC";
const COUNTER_DEC = "counter/COUNTER_DEC";
const COUNTER_RESET = "counter/COUNTER_RESET";

export function inc(payload) {
  return {
    type: COUNTER_INC
  };
}

export function dec(payload) {
  return {
    type: COUNTER_DEC
  };
}

export const reset = () => ({ type: COUNTER_RESET });

const INITIAL_STATE = {
  count: 0
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "counter/COUNTER_INC":
      return {
        ...state,
        count: state.count + 1
      };
    case "counter/COUNTER_DEC":
      return {
        ...state,
        count: state.count - 1
      };
    case "counter/COUNTER_RESET":
      return {
        ...state,
        count: 0
      };
    default:
      return state;
  }
}
