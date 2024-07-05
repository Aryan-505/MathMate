import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import authSlice from "./auth-slice.js"


const combinedReducers = combineReducers({
  auth: authSlice.reducer,
})

const rootReducer = (state, action) => {
  if(action.payload == "RESET"){
    console.log("RESET action")
  }

  if (action.payload == "PRINT_STATE"){
    console.log("PRINT_STATE action")
    console.log(state)
  }

  return combinedReducers(state,action)


}


const store = configureStore({
  reducer: rootReducer
})

export default store
