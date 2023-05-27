import { configureStore } from "@reduxjs/toolkit";
import modelReducer from "./Model";
import AIReducer from "./ai";

export const store = configureStore({
  reducer: { model: modelReducer,ai:AIReducer },
});
  