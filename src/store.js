import { combineReducers, createStore } from "@reduxjs/toolkit";
import { todoReducer } from "./reducers/todoReducers";
import { visibilityReducer } from "./reducers/visibilityReducers";

const combinedReducer = combineReducers({
  firstReducer: todoReducer,
  secondReducer: visibilityReducer,
});

export const store = createStore(combinedReducer);
