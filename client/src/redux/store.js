import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import randomPhotos from "./reducer/random-photos";

const combineReducer = combineReducers({
  randomPhotos
});

const store = createStore(combineReducer, applyMiddleware(thunk));

export default store;
