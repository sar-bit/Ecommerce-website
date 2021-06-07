import { all, takeEvery, takeLatest } from "redux-saga/effects";
import API from "./../services/Api";
import { signIn } from "./usersaga";
import { getProduct,getCategory,getCart,getSingleProduct } from "./productsaga";

const api = API.create();
export default function* root() {
  yield all([takeEvery("SignIncalled", signIn, api)]);
  yield all([takeEvery("getProductcalled",getProduct,api)]);
  yield all([takeEvery("getCategorycalled",getCategory,api)]);  
  yield all([takeEvery("getCartcalled",getCart,api)]);
  yield all([takeEvery("getSingleProductcalled",getSingleProduct,api)]);
}
