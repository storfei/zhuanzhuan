import React, { Component } from 'react'
import request from "../util/request"
import { connect } from 'react-redux'
import actionType from "../stort/dispatchs"
import { bindActionCreators } from 'redux';
const Islogin =(Module)=>{

    class Islogin extends Component {
        state ={
            show:false
        }
        render() {
            let {show} = this.state
            return show && <Module {...this.props}/>
        }
        componentDidMount(){
            let {show} = this.state
            let {getuser} = this.props
            getuser(this)
           
        }
    }
    return connect(
        state=>state,
        dispatch=>bindActionCreators(actionType,dispatch)
    )(Islogin)
}

export default Islogin