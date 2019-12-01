import uuid from "uuid";

import { SET_ALERT, REMOVE_ALERT } from "./types";

// we can do the dispatch tingy thanks to thunk
export const setAlert = (msg, alertType, timeout = 5000) => dispatch => {
  const id = uuid.v4();
  dispatch({
    type: SET_ALERT,
    payload: {
      id,
      msg,
      alertType
    }
  });

  // remove the alert after 5s
  setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: { id } }), timeout);
};
