import { combineReducers } from "redux";
import { fetching, fetched, fetchError } from "./actions";

const initialState = {
  data: null,
  fetchStatus: "new",
  err: null
};

export default function(state = initialState, action) {
  const { type } = action;
  switch (type) {
    case "FETCHING":
      return { ...state, fetchStatus: "fetching" };
    case "FETCHED":
      const { data } = action;
      return { ...state, fetchStatus: "fetched", data };
    case "FETCH_ERROR":
      const { err } = action;
      return { ...state, err, fetchStatus: "fetchError" };
    default:
      return state;
  }
}
