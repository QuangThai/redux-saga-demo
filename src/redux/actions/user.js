import {
  GET_LIST_USER,
  GET_LIST_USER_SUCCESS,
  GET_LIST_USER_FAILED,
} from "../constants/user.js";

export function getListUser() {
  return {
    type: GET_LIST_USER,
  };
}

export function getListUserSuccess(payload) {
  return {
    type: GET_LIST_USER_SUCCESS,
    payload,  // payload: payload
  };
}

export function getListUserFailure(message = "") {
  return {
    type: GET_LIST_USER_FAILED,
    message, // message: message
  };
}
