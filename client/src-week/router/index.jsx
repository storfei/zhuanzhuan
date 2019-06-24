import React, { Component } from 'react'
import RouterView from "./routerView"
import routerList from "./routerList"
import {BrowserRouter} from 'react-router-dom'
import Charge from "../views/charge"
 class Index extends Component {
    render() {
        return (
            <BrowserRouter>
                <RouterView routers={routerList}>
                    <Charge/>
                </RouterView>
            </BrowserRouter>
        )
    }
}
export default Index