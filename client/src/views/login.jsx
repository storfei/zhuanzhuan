import React, { Component } from 'react'
import "../static/font_twao609olbc/iconfont.css"
import request from "../util/request"
import Cookie from 'js-cookie'

class Login extends Component {
    state={
        phone:"",
		password:"",
		checkcode:"",
        timer:null,
        tiptext:"验证码",
        time:3,
        check:false
    }
    render() {
        let {phone,
            password,
            checkcode,check,tiptext} = this.state
        return (
            <div className="login">
                <div className="login-box">
                    <div className="box">
                    <div className="left">
                        <span>welcome</span>
                        <p>赚赚金融开创信贷“1+n” 模式的综合互联网金融服务共享平台</p>
                    </div>  
                    <div className="right">
                        <div className="right-box">
                        <span className="iconfont">&#xe612;</span>
                        <b>赚赚金融渠道管理系统</b>
                        <div className="form-box">
                        <p><input type="text" placeholder="注册邮箱/手机号"
                        value={phone}
                        onChange={(e)=>{
                            this.setState({phone:e.target.value})
                        }}
                        /></p>
                        <p><input type="text" placeholder="登录密码"
                         value={password}
                         onChange={(e)=>{
                            this.setState({password:e.target.value})
                         }}/></p>
                        <p><input type="text" placeholder="验证码"
                         value={checkcode}
                         onChange={(e)=>{
                            this.setState({checkcode:e.target.value})
                         }}/> <i
                         className={check ? "active" :""}
                         onClick={()=>{
                            this.getauthcode()
                         }}>{tiptext}</i></p>
                        <a href="">忘记密码</a>
                        <button
                        onClick={()=>{
                            this.commit()
                        }}>登录</button>
                        </div>
                        </div>
                    </div>  
                    </div>            
                </div>
            </div>
        )
    }
    commit(){
        let {tiptext,timer,time,phone,password,checkcode,check} = this.state
        request.post("/api/login",{
            phone,
            password,
            checkcode
        }).then(res=>{
            let {code,message} = res;
            if(code){
                alert(message)
            }else{
                Cookie.set("user",res.sessionId,5)
                this.props.history.push("/home")
            }
        })
    }
    getauthcode(){
        let {tiptext,timer,time,phone,pwd,authcode,check} = this.state
        this.setState({check:true}) 
        timer = setInterval(() => {
            time --;
            if(time <= 0){
                console.log(time)
                request.get("/api/checkCode").then(res=>{
                    this.setState({
                        tiptext:res.Verification,
                        time:3,
                        check:false
                    })
                })
                clearInterval(timer)

            }else{
                this.setState({
                    tiptext:`${time}秒后获取`,
                })
                return
            }
        }, 1000);
    }
}
export default Login