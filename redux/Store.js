import { createStore,  compose } from "redux";
import thunk from "redux-thunk";
import RootReducer from "./reducers/RootReducer";

const Store = createStore(RootReducer, compose(window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : args => args))

export default Store
