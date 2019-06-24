import request from "../../util/request"
import {USER, SELEDATA} from "../store.action"
const user =(state={},action)=>{
    let newState = JSON.parse(JSON.stringify(state))
        // return newState
        switch(action.type){
            case USER :
                {
                newState.info = action.info
                return newState
            }
           
            break
                default :
                return state
        }
    return state
}

export default user