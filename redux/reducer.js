import ACTION_TYPE from "./action";

const initialState = {
  totalPayment: 0,
};

// Reducer
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPE.INCREMENT_AMOUNT:
      return {
        ...state,
        totalPayment: state.totalPayment + action.value,
      };
    case ACTION_TYPE.DECREMENT_AMOUNT:
      return {
        ...state,
        totalPayment: state.totalPayment - action.value,
      };
    default:
      return state;
  }
};

export default rootReducer;
