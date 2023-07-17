import { combineReducers, configureStore } from "@reduxjs/toolkit";
import apSlice from "./slice/apSlice";

//  combineReducers({
//     app : apSlice.reducer,
// })
// const rootReducer = (state,action)=>{
//     if (action.type === "REDUX_STORE_RESET"){
//         state = undefined
//     }
//     return combineReducers(state, action);
// }
const store = configureStore({
  //reducer : rootReducer,
  reducer :{
    app : apSlice
  }
})

export default store