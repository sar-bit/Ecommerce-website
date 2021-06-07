import { createSlice } from "@reduxjs/toolkit";
import * as _ from "lodash";

const userslice = createSlice({
  name: "product",
  initialState: {
    productInfo: [],
    categoryInfo: [],
    cartInfo: [],
    singleProduct: [],
    cart: [],
  },
  reducers: {
    productSuccess: (state, action) => {
      return {
        ...state,
        productInfo: action.payload,
      };
    },
    categorySuccess: (state, action) => {
      return {
        ...state,
        categoryInfo: action.payload,
      };
    },
    cartSuccess: (state, action) => {
      return {
        ...state,
        cartInfo: action.payload,
      };
    },
    singleproductSuccess: (state, action) => {
      return {
        ...state,
        singleProduct: action.payload,
      };
    },

    addtoCartSuccess: (state, action) => {

      return {
        ...state,
        cart: [...state.cart,action.payload],
      };
    },
  },
});
export default userslice.reducer;

export const {
  productSuccess,
  categorySuccess,
  cartSuccess,
  singleproductSuccess,
  addtoCartSuccess,
} = userslice.actions;
