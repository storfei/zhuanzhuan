import React, { Component } from 'react'

import {createStore,applyMiddleware} from "redux"
import thunk from "redux-thunk"
const reducer = (state={charge:[],yes=[]},action)=>{

    let id = 0;
    let newstate = JSON.parse(JSON.stringify(state))
    switch(action.type){
        case "GETLIST" :{
            
            let {name,clas,kind,money} = action;
            console.log(name,clas,kind,money,id)
            let index = newstate.charge.findIndex(item=>item.name ==name)
            if(index == -1){
                newstate.charge.push([{name},{clas},{kind},{money}])
            }else{
                return 
            }
            console.log(newstate.charge)
            return newstate
        }
        case "REMOLIST" :{
            let {name} = action;
            console.log(newstate.charge)
            let index = newstate.charge.filter(item=>{
                console.log(item)
                return item.findIndex(ite=>ite.name ==name)
                
            })
            console.log(newstate.charge,index)
            newstate.charge.splice([...index],1)
            
            return newstate
            
        }
        case "ADDLIST" :{

        }
        case "REMO" :{

        }
    }
    return state

}

const store =createStore(reducer,applyMiddleware(thunk))

export default store