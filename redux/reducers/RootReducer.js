import { combineReducers } from "redux";
import EventReducer from "./EventReducer";

export const RootReducer = combineReducers(EventReducer)