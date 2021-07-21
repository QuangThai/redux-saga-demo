import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";
import _get from "lodash/get";
import { getListUserSuccess, getListUserFailure } from "../actions/user";
import { GET_LIST_USER } from "../constants/user";

// function that makes the api request and returns a Promise for response
function fetchUsers() {
  return axios({
    method: "GET",
    url: "https://jsonplaceholder.typicode.com/users"
  });
}

// worker saga: makes the api call when watcher saga sees the action
function* callApiUsers() {
  try {
    const response = yield call(fetchUsers);
    const data = _get(response, "data", []);
    yield put(getListUserSuccess(data));
  } catch (error) {
    yield put(getListUserFailure(error));
  }
}

// watcher saga: watches for actions dispatched to the store, starts worker saga
export default function* userSaga() {
  yield takeLatest(GET_LIST_USER, callApiUsers);
}
