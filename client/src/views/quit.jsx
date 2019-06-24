import React, { Component } from 'react'

import { Layout, Menu, Breadcrumb, Icon } from "antd"
import {connect} from 'react-redux'
import seleaction from "../stort/dispatchs"
import { bindActionCreators } from 'redux';
import { Table,Pagination,DatePicker} from 'antd';
import getstate from '../util/gethandlestate'
import Myfrom from "../component/form"
const { Column } = Table;
const {Content,} = Layout;

class Quit extends Component {
    state={
        current: 1,
        ind:-1,
        listdata:null,
        num:8,
        
    }
    render() {
        let {list,initpage} = this.props.nav
        let {num,handle,ind} = this.state
        // getstate(list)
        return (
            <div>
                <Myfrom list = {list}/>
             <Content style={{ margin: '0 16px' }}>
                    
                    <Breadcrumb style={{ margin: '16px 0' }}>
                    </Breadcrumb>
                    <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                    <Table dataSource={list} pagination={true} rowKey="phone">
                            <Column title="订单号" dataIndex="id" rowKey="id" />
                           <Column title="用户名称" dataIndex="customerName" rowKey="customerName" />
                           <Column title="手机号" dataIndex="phone" rowKey="phone" />
                           <Column title="产品类型" dataIndex="type" rowKey="type" />
                           <Column title="贷款金额(万元)" dataIndex="money" rowKey="money" />
                           <Column title="贷款利率" dataIndex="interestRate" rowKey="interestRate" />
                           <Column title="订单状态" dataIndex="handleState" rowKey="handleState" />
                           <Column title="客服" dataIndex="serviceName" rowKey="serviceName" />   
                       </Table>

                      
                    </div>
                    
                </Content>
            </div>
        )
    }
    componentDidMount(){
        let {current,num} = this.state;
        let {type} = this.props.match.params
        this.props.getlist(type);
        // this.gettype()
        // this.props.changpage(current,num)

    }
    
}
export default connect(
    state=>state,
    dispatch=>bindActionCreators(seleaction,dispatch)
)(Quit)