import {applyMiddleware, legacy_createStore as  createStore } from "redux";

//redux-thunk
import thunk from "redux-thunk";

// Reducers 
import dataReducer from "./dataReducer/dataReducer";

const store = createStore(dataReducer, applyMiddleware(thunk))


export default store;