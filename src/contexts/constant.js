export const apiUrl =
  process.env.NODE_ENV !== "production" ? "http://localhost:5000/api" : "";

export const LOCAL_STORAGE_TOKEN_NAME = "checkit";

export const PRODUCT_REDUCER_PRODUCT = "PRODUCT_REDUCER_PRODUCT";
export const PRODUCT_REDUCER_FAIL = "PRODUCT_REDUCER_FAIL";
export const ADD_PRODUCT = "ADD_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const UPDATE_PRODUCT = "UPDATE_PRODUCT";
export const FIND_PRODUCT = "FIND_PRODUCT";