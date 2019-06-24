import React, { Component } from 'react'
import {connect} from 'react-redux'
import search from "../stort/dispatchs"
import { Form, Icon, Input, Button, Checkbox ,DatePicker} from 'antd';
import { bindActionCreators } from 'redux';
class Forms extends Component {
    constructor(props){
        super(props)
        this.state={
            ind:-1,
            sever:null,
            type:null,
            handle:null,
            client:{
                    sever:null,
                    type:null,
                    handle:null
            },
            handledata:[
                {
                    title:"未处理"
                },
                {
                    title:"补全中"
                },
                {
                    title:"已处理"
                },
                {
                    title:"返佣中"
                },
            ]
        }
    }
    
    render() {
        let {list} = this.props
        let {ind,handledata,client} = this.state
        let {sever,type,handle} = this.state.client
        return (
            <div>
                <Form onSubmit={this.handleSubmit} className="login-form">
                   <div className="filter">
                        <div className="filter-one">
                            <div>
                                <span className="time">处理时间 :</span>
                                <DatePicker renderExtraFooter={() => 'extra footer'} />
                                <DatePicker renderExtraFooter={() => 'extra footer'}/>    
                            </div>
                            <div className="two">
                                <span className="time">金额范围 :</span>
                                <input type="text"/><input type="text"/>
                            </div>
                            <div className="three">
                                <span className="time">利率范围 :</span>
                                <input type="text"/><input type="text"/>
                            </div>
                        </div>
                        <div className="filter-two">
                            <div className="change-one">
                                <b>处理状态 :</b>
                                {
                                    handledata.map((item,key)=>{
                                        return  <span
                                        className={ind == key ? "active" : ""}
                                        onClick={()=>{
                                            const newClient = client;
                                            newClient.handle = item.title
                                            this.setState({client:newClient,ind:key})
                                        }}
                                        key={key}>{item.title}</span>
                                    })
                                }
                            
                            </div>
                            <div className="change-two">
                                <span className="time">产品类型: </span>
                                <select onChange={(e)=>{
                                                const newClient = client;
                                                newClient.type = e.target.value
                                                this.setState({client:newClient})
                                            }}>
                                    
                                    {
                                        this.gettype(list).map((item,index)=>{
                                            return <option value={item}
                                            key={index}>{item}</option>
                                        })
                                    }
                                </select>
                            </div>
                            <div className="change-three">
                                <span className="time">客服名称: </span>
                                <select onChange={(e)=>{
                                                const newClient = client;
                                                newClient.sever = e.target.value
                                                this.setState({client:newClient})
                                            }}>
                                    {
                                        this.getsever(list).map((item,index)=>{
                                            return <option value={item}
                                            key={index}>{item}</option>
                                        })
                                    }
                                </select>  
                            </div>
                            <button
                            onClick={()=>{
                                this.props.search(client)
                            }}>查找</button>

                        </div>
                    </div>
                </Form>
            </div>
        )
    }
    componentDidMount(){
        // let {client} = this.state;
        // console.log(this.props)
        // this.props.search(client)
    }
    handleSubmit = e => {
        e.preventDefault();
        // this.props.form.validateFields((err, values) => {
        //   if (!err) {
        //     console.log('Received values of form: ', values);
        //   }
        // });
    };
    gettype(list){
        let arr =[]
        list && list.forEach(item=>{
            let i = arr.findIndex(it=>{
                return it == item.type
            })
            if(i == -1){
                arr.push(item.type)
            }else{
                return
            }
        })
        return arr
    }
    getsever(list){
        let arr =[]
        list && list.forEach(item=>{
            let i = arr.findIndex(it=>{
                return it == item.serviceName
            })
            if(i == -1){
                arr.push(item.serviceName)
            }else{
                return
            }
        })
        return arr
    }
}
export default connect(
    state=>state,
    dispatch=>bindActionCreators(search,dispatch)
)(Forms)