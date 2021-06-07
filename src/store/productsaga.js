import { call, put } from "redux-saga/effects";
import {
  productSuccess,
  categorySuccess,
  cartSuccess,
  singleproductSuccess,
  addtoCartSuccess,
} from "./productredux";
import Api from "./../services/ApiCaller";



export function* getProduct(api, { payload = {} }) {
  try {
    const result = yield call(Api.callServer, api.getProduct, {}, true);
   // console.log(result, "resultresultresultresultresultresultresultresult");
    yield put(productSuccess(result));
  } catch (error) {
    console.log(error);
  } finally {
  }
}

export function* getCategory(api, { payload = {} }) {
  try {
    const result = yield call(Api.callServer, api.getCategory, {}, true);
    console.log(result, "category");
    yield put(categorySuccess(result));
  } catch (error) {
    console.log(error);
  } finally {
  }
}

export function* getCart(api, { payload = {} }) {
  try {
    const result = yield call(Api.callServer, api.getCart, {}, true);
    console.log(result, "category");
    yield put(cartSuccess(result));
  } catch (error) {
    console.log(error);
  } finally {
  }
}

export function* getSingleProduct(api, { payload = {} }) {
  try {
    const {productId} = payload || {};
    const result = yield call(Api.callServer, api.getSingleProduct, {productId}, true);
    console.log(result, "singleproductSuccess");
    yield put(singleproductSuccess(result));
  } catch (error) {
    console.log(error);
  } finally {
  }
}

export function* addProducttoCart(api,{payload = {} }){
  try{
    console.log(payload,'addtocartpayload')
    yield put(addtoCartSuccess(payload.productdetail));
  }catch(error){

  }finally{

  }
}


