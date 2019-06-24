import React, { Component } from 'react'
import { Layout } from "antd"
import RouterView from "../router/module/routerView"
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import {bindActionCreators} from "redux"
import activeType from "../stort/dispatchs"

import { DatePicker} from 'antd';
const { Header} = Layout;
class Menus extends Component {
    state={
        top:null,
       
    }
    render() {
        let {top,handle,ind}  = this.state
        return (
            <Layout>
            <Header 
            className="header-antd"
            style={{ background: '#fff', padding: 0 }} >
                {
                    top && top.map((item,key)=>{
                        return <span key={key}>
                            <NavLink to={item.link} onClick={()=>{
                                 this.props.getlist(item.type)
                            }}>
                                 {item.title}
                            </NavLink>
                        <i onClick={()=>{
                            this.props.removesele(item.link)
                           console.log(this.props,"yhhjk")
                        }}>X</i>
                        </span>
                    })
                }
                
            </Header>
            
            <RouterView routers={this.props.routers}/>
           
            </Layout>
        )
    }
    componentDidMount(){

    }
    componentWillReceiveProps(nextPorps){
        let {top} = this.state
        let {sele} = nextPorps.nav
        this.setState({top:sele})
    }
}
export default connect(
    state=>state,
    dispatch=>bindActionCreators(activeType,dispatch)
)(Menus)