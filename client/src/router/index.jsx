import React, { Component } from 'react'
import routerList from "../router/module/routerList"
import RouterView from "../router/module/routerView"
import {BrowserRouter} from "react-router-dom"

class Index extends Component {
    render() {
        return (
            <BrowserRouter>
               
                <RouterView routers={routerList}/>
            
            </BrowserRouter>
        )
    }
}
export default Index