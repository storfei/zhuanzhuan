import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import { Layout, Menu} from "antd"
import {connect} from 'react-redux'
import {bindActionCreators} from "redux"
import activeType from "../stort/dispatchs"
import routerList from "../router/module/routerList"
import RouterView from "../router/module/routerView"
// import "../../node_modules/antd/dist/antd.css"
const { SubMenu } = Menu;
const { Sider } = Layout;

class Home extends Component {
    state={
        nav:[
            {
                title:"首页",
                link:"home/index"
            },
            {
                title:"订单管理",
                link:"home/menu",
                children:[
                    {
                        title:"贷款订单",
                    },
                    {
                        title:"转单订单",
                    },
                    {
                        title:"保险订单",
                    }
                ]
            },
            {
                title:"财务管理",
                link:"home/finance"
            }
        ]
    }
    render() {
        let {routers,navdata,user:{info}} = this.props
      
        return (<Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />

          <div className="msg">
            <img src={info.facePhoto} alt=""/>
            <h2>{info.phone}</h2>
          </div>

           
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            
            {
              navdata && navdata.map((item,index)=>{
                return <SubMenu
                    key={index}
                    title={
                      <span>
                        {/* <Icon type={item.font} /> */}
                        <NavLink to={item.link}>
                           <span>{item.title}</span>
                        </NavLink>
                       
                      </span>
                    }
                  >
                    {
                      item.children && item.children.map((ite,ind)=>{
                        return  <Menu.Item key={ite.title}>
                          <NavLink to={ite.link}
                          onClick={()=>{
                            
                            this.props.selects(ite.link,index)
                            this.props.getlist(ite.type)
                          }}>
                           <span>{ite.title}</span>
                        </NavLink>
                        </Menu.Item>
                      })
                    }
                  </SubMenu>
                    })
            }
          </Menu>
        </Sider>
        <RouterView routers={this.props.routers}/>
      </Layout>
        )
    }
    componentDidMount(){
        this.props.getdata()
        
    }
}
export default connect(
  state=>{
    return {
      ...state.nav,
      ...state.info
    }
  },
  dispatch=>bindActionCreators(activeType,dispatch)
)(Home)