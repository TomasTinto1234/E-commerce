import { legacy_createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import shoppingReducer from "../redux/redux.js";

const store = legacy_createStore(shoppingReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
