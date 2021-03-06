/**
 * Created by clstrfvck on 12/04/2017.
 */
//App state will be built in this file.

import { applyMiddleware, createStore } from "redux"
import thunk from "redux-thunk"

import reducer from "./reducers"

export default createStore(reducer,
    //the two arguments below to be removed in production build
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
);