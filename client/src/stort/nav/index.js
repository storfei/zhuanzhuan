
import {GETDATA,SELEDATA,REMO,GETLIST ,CHANGE,PAGE,FILTER} from "../store.action"
const brr = (arr)=>{
    switch(arr){
        case 0 : {
            return "未处理"
        }
        case 1 : {
            return "补全中"
        }
        case 2 : {
            return "已处理"
        }
        case 3 : {
            return "返佣中"
        }
        case 4 : {
            return "无状态"
        }
    }
}
const nav =(state={sele:[]},action)=>{
        let newState = JSON.parse(JSON.stringify(state))
        // return newState
        switch(action.type){
            //管理总体数据
            case GETDATA :
                {
                newState.navdata = action.navdata
                return newState
            }
            // 展示选中
            case SELEDATA :
                    {
                        let {navdata,sele} = newState
                        let {link,index} = action
                        let ind = navdata[index].children.findIndex(item=>{
                        
                            return item.link == link
                        })
                        let el = navdata[index].children[ind]
                        let i =sele.findIndex(item=>{
                            return item.link == el.link
                        })
                        if(i == -1){
                            sele.unshift(el)
                        }else{
                            sele.splice(i,1)
                            sele.unshift(el)
                        }
                    return newState
                }
                //删除
            case REMO :
                {
                    let {link} = action;
                    let {navdata,sele} = newState
                    let ind = sele.findIndex(item=>item.link == link)
                    
                    sele.splice(ind,1)
                    return newState
            }
            case GETLIST :
                {   
                    newState.list = action.data
                    newState.initpage = newState.list.slice(0,8)
                    newState.list.filter(item=>{
                        return item.handleState = brr(item.handleState)
                    })
                    console.log(newState)
                    return newState
            }
            case CHANGE :
                {   
                    let {current,num} = action
                    newState.initpage = newState.list.slice(0,num)
                    console.log(newState)
                    return newState
            }
            case PAGE :
                    {   
                        let {page,num} = action
                        newState.initpage = newState.list.slice((page-1)*num,page*num)
                        
                        return newState
                }
            case FILTER :
                {   
                    let {obj} = action;
                    console.log(obj,newState.list)
                    newState.list = newState.list.filter(item=>{
                        if( item.serviceName == obj.sever  && item.type == obj.type && item.handleState == obj.handle){
                            
                            return item
                        }
                    })
                    console.log(newState.list)
                    return newState
            }
            break
                default :
                return state
        }
}

export default nav