import { createStore,  compose ,applyMiddleware} from "redux";
import RootReducer from "./reducers/RootReducer";
import thunk from "redux-thunk";
const Store = createStore(RootReducer,applyMiddleware(thunk))

export default Store
