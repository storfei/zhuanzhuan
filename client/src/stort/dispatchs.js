import navdata  from "../mock/navdata"
import request from "../util/request"

import {USER,GETDATA,SELEDATA,
    REMO,GETLIST,CHANGE,PAGE,
    FILTER
} from "./store.action"
const getdata = ()=>{
    return dispatch=>{
        // request.get(url).then(res=>{
            return dispatch({
                type:GETDATA,
                navdata
            })
        // })
    }
    
}

const getuser =(that)=>{
    return dispatch=>{
        request.get("/api/islogin").then(res=>{
            that.setState({show:true})
            return dispatch({
                type:USER,
                info:res.info
            })
        }).catch(res=>{
            let {status} = res
            if(status == 401){
                that.props.history.push("/login")
            }
            
        })
    }
}

const selects = (link,index)=>{
    return dispatch=>{
        return dispatch({
            type:SELEDATA,
            link,index
        })
    }
}

const removesele = (link)=>{
    return dispatch=>{
        return dispatch({
            type:REMO,
            link
        })
    }
}

const getlist =(order)=>{
    return dispatch=>{
        request.get("/api/list",{
            order
        }).then(res=>{
            let {data} = res
            return dispatch({
                type:GETLIST,
                data
            })
        })
    }
}


const changpage = (current,num)=>{
    return dispatch=>{
        dispatch({
            type:CHANGE,
            current,num
        })
    }
}
const page = (page,num)=>{
    return dispatch=>{
        dispatch({
            type:PAGE,
            page,num
        })
    }
}

const search=(obj)=>{
    return dispatch=>{
        dispatch({
            type:FILTER,
            obj
        })
    }
}
export default {
    getdata,
    getuser,
    selects,
    removesele,
    getlist,
    changpage,
    page,
    search
}