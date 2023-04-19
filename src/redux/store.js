import {applyMiddleware, legacy_createStore as  createStore } from "redux";

//redux-thunk
import thunk from "redux-thunk";

// Reducers 
import dataReducer from "./dataReducer/dataReducer";
import commentsReducer from "./commentsReducer/commentsReducer";

import { combineReducers } from "redux";

const allReducers = combineReducers({
    dataReducer,
    commentsReducer
})

const store = createStore(allReducers, applyMiddleware(thunk))


export default store;