import React, { Component } from 'react'
import { Layout, Menu, Breadcrumb, Icon } from "antd"

const { Header, Content, Footer, Sider } = Layout;
class Index extends Component {
    render() {
        return (
           
                <Layout>
                <Header style={{ background: '#fff', padding: 0 }} >
                    <span>asdjgf</span>
                </Header>
                <Content style={{ margin: '0 16px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>User</Breadcrumb.Item>
                    <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb>
                    <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>Bill is a cat.</div>
                </Content>
                </Layout>
        )
    }
    componentDidMount(){
        console.log(this.props)
    }
}
export default Index