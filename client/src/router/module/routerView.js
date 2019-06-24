import React, { Component } from 'react'
import {Redirect,Route,Switch} from "react-router-dom"
function Routes(props){

    let {routers} =props;
    let arr = routers.length && routers.filter(item=>!item.redirect)
    
    let brr =routers.length && routers.filter(item=>item.redirect).map((item,index)=>{
        
        return <Redirect from={item.path} key ={index} to={item.redirect} />
    })
    return <Switch>
            {
                arr.map((item,index)=>{
                    return <Route 
                    key={index}
                    path={item.path}
                    render={(props)=>{
                        return <item.component {...props} routers={item.chlidren}/>

                    }} />
                }).concat(brr)
            } 
        
    </Switch>
}

export default Routes