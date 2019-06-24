import React, { Component } from 'react'
import nav from "./nav/index"
import user from "./user/index"
import {createStore,applyMiddleware,combineReducers} from 'redux'
import thunk from "redux-thunk"
const reducer = combineReducers({
    nav,
    user
})

const store = createStore(reducer,applyMiddleware(thunk))

export default store