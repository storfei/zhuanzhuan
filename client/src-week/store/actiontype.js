import axios from "axios"

// 添加收费方案
const getlist = (name,clas,kind,money)=>{
    return dispatch=>{
        dispatch({
            type:"GETLIST",
            name,clas,kind,money
        })
    }
    
}

// 删除收费方案
const removecharge =(name)=>{
    return dispatch=>{
        dispatch({
            type:"REMOLIST",
            name
        })
    }
}
// 添加支付方式
const add = (name)=>{
    return dispatch=>{
        dispatch({
            type:"ADDLIST",
            name
        })
    }
}
// 删除支付方式

const remo = (name)=>{
    return dispatch=>{
        dispatch({
            type:"REMO",
            name
        })
    }
}
export default {getlist,removecharge,add,remo}