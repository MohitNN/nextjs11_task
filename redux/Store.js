import { createStore,  compose } from "redux";
import RootReducer from "./reducers/RootReducer";

const Store = createStore(RootReducer)

export default Store
