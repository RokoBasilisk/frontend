import { BILL_REDUCER_LOAD_BILL, UPDATE_BILL } from "../contexts/constant";

export const billReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case BILL_REDUCER_LOAD_BILL:
      console.log("9999999");
      console.log(payload);
      return { ...state, bill: payload, billLoading: false };
    case UPDATE_BILL:
      const newBills = state.bill.map((billhold) =>
        billhold._id === payload._id ? payload : billhold
      );
      return { ...state, bill: newBills };
    default:
      return state;
  }
};
