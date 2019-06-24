import React, { Component } from 'react'
import Myheader from "../component/header"
// 通过仓库来管理这些数据
import {connect} from "react-redux"
import actionType from '../store/actiontype'
import { bindActionCreators } from '../../../../../AppData/Local/Microsoft/TypeScript/3.5/node_modules/redux';
class Charge extends Component {
    state={
        name:"",
        clas:"",
        kind:"",
        money:"",
        id:0
    }
    render() {
        let {name,clas,kind,money,id} = this.state;
        return (
            <div className="wrap">
                <Myheader title="收费制单"/>
                <div className="forms">
                    <p><b>收费方案一 </b> <i
                    onClick={()=>{
                        this.props.removecharge(name)
                    }} 
                    >X</i></p>
                    <p>收费名称<input type="text"
                    onChange={(e)=>{
                        this.setState({name:e.target.value})
                    }}
                    /></p>
                    <p>收费年级<input type="text"
                    onChange={(e)=>{
                        this.setState({clas:e.target.value})
                    }}/></p>
                    <p>餐饮费<input type="text"/></p>
                    <p>
                        <input type="text" placeholder="输入收费名称"
                    onChange={(e)=>{
                        this.setState({kind:e.target.value})
                    }}/>
                        <input type="text" placeholder="输入收费金额" 
                    onChange={(e)=>{
                        this.setState({money:e.target.value})
                    }}/> 元
                    </p>
                </div>
            
                    
                <div className="pay">
                    <p> <b> 支付方式一</b> <i onClick={()=>{
                        this.props.remove(name)
                    }}
                    >删除</i> </p>
                    <p> <b>支付方式二</b>
                        <input type="radio" name=""/>分期
                        <input type="radio" name=""/>不分期

                    </p>
                    <p  onClick={()=>{
                        this.props.add()
                    }}>+
                    <input type="text" placeholder="支付金额"/>
                    
                    </p>
                </div>
                <div className="btn" onClick={(id)=>{
                        //点击添加支付方式
                        this.getform(id)
                    
                }}>
                    <span>+</span>
                    <b>添加新的收费方案</b>
                </div>
                <button
                onClick={()=>{
                    // 
                    console.log(this.props)
                    this.props.history.push("/yes")
                }}>完成制单</button>
            </div>
        )
    }
    componentDidMount(){
            
        console.log(this.props)
    }
    getform(){
        // 把收集到的信心传递给仓库
        let {name,clas,kind,money} = this.state;
        this.props.getlist(name,clas,kind,money)
    }
}

export default connect(
    state=>state,
    dispatch=>bindActionCreators(actionType,dispatch)
)(Charge)