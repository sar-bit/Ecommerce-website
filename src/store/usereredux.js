import { createSlice } from "@reduxjs/toolkit";
import * as _ from "lodash";

const userslice = createSlice({
  name: "user",
  initialState: {
    signInLoading: false,
    signInError: "",
    auth: false,
  },
  reducers: {
    loginSuccess: (state, action) => {
      return {
        auth: action.payload,
      };
    },
    loginTrigger: (state, action) => {
      return {
        ...state,
        signInLoading: action.payload,
      };
    },
    loginFail: (state, action) => {
      return {
        signInError: action.payload,
      };
    },
  },
});
export default userslice.reducer;

export const { loginSuccess, loginTrigger, loginFail } = userslice.actions;
