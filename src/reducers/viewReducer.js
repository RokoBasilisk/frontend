import { VIEW_REDUCER_BILLS } from "../contexts/constant";

export const viewReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case VIEW_REDUCER_BILLS:
      return { ...state, yearproduct: payload, yearLoading: false };
    default:
      return state;
  }
};
