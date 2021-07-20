import produce from "immer";
import {
  GET_LIST_USER,
  GET_LIST_USER_SUCCESS,
  GET_LIST_USER_FAILED,
} from "../constants/user.js";

export const initialState = {
  users: [],
  statusFlags: {
    isLoading: false,
  },
  log: {
    error: "",
  },
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    const { type } = action;
    switch (type) {
      case GET_LIST_USER: {
        draft.statusFlags.isLoading = true;
        break;
      }
      case GET_LIST_USER_SUCCESS: {
        draft.statusFlags.isLoading = false;
        draft.users = action.payload;
        break;
      }
      case GET_LIST_USER_FAILED: {
        draft.statusFlags.isLoading = false;
        draft.log.error = action.message;
        break;
      }
    }
  });

export default appReducer;
