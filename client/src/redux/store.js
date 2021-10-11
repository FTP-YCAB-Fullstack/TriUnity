import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import userReducer from "./reducer/user";

const combineReducer = combineReducers({
  user: userReducer
});

const store = createStore(combineReducer, applyMiddleware(thunk));

export default store;
