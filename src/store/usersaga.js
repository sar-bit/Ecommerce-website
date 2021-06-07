import { call, put } from "redux-saga/effects";
import {
  loginSuccess,
  loginFail,
  loginTrigger,

} from "./usereredux";
import Api from "./../services/ApiCaller";

export function* signIn(api, { payload = {} }) {
  yield put(loginTrigger(true));
  try {
    const { navigation, userName, password } = payload;
    let result = false;

    if (userName === "admin" && password === "password") {
      result = true;
    }
    console.log(result, "sigininajefgwjyeu");
    yield put(loginSuccess(result));

    navigation.push("/");
  } catch (errorPayload) {
    yield put(loginFail());
  } finally {
    yield put(loginTrigger(false));
  }
}


