import React from 'react';
import loginless from '../style/Login.less'
import { withRouter } from 'react-router-dom'
import Change from './Change'
import { login} from '../apis/index'


class Login extends React.Component{
    constructor(props){
        super(props)
        this.state={
            userName:'',
            pws:'',
            fade:false
        }
    }

    Login = () => {
        var data = 'username=' + this.state.userName + '&' + 'password=' + this.state.pws;
        login(data).then(resp => {
            if(resp.data.status === 202){
                this.setState({
                    fade:true
                })
            }
            if(resp.data.status === 400){
                alert('账号或密码错误')
            }
            if(resp.data.status === 200){
                var content = JSON.stringify(resp.data.data)
                sessionStorage.setItem('teacher_name',resp.data.msg)
                sessionStorage.setItem('content',content)
                this.props.history.push('/content')
            }
        })
        .catch(err => {
            alert(err)
        })
    }

    userChange = (e) =>{
        this.setState({
            userName:e.target.value
        })
    }

    pwsChange = (e) =>{
        this.setState({
            pws:e.target.value
        })
    }

    jump = () =>{
        this.props.history.push('/content')
    }

    render(){
        return(
            <div className={loginless.body}>
            {this.state.fade?<Change name={this.state.userName} jump={this.jump.bind(this)} userName={this.state.userName} password={this.state.pws}></Change>:null}
            <div className={loginless.Login}>
                <div className={loginless.Login_log}>
                    <div className={loginless.Login_log_ico}></div>
                    <div className={loginless.Login_log_word}>
                    <span>信息通知系统后台管理</span>
                    </div>
                </div>
                <div>
                    <div className={loginless.Login_user}>
                        <div className={loginless.Login_user_ico}></div>
                        <div className={loginless.Login_user_val}>
                            <input type="text" onChange={this.userChange.bind(this)}></input>
                        </div>
                    </div>
                    <div className={loginless.Login_pws}>
                        <div className={loginless.Login_pws_ico}></div>
                        <div className={loginless.Login_pws_val}>
                            <input type="password" placeholder="密码" onChange={this.pwsChange.bind(this)}></input>
                        </div>
                    </div>
                    <div className={loginless.Login_btn}>
                    <span onClick={this.Login.bind(this)}>登陆</span>
                    </div>
                </div>
                <div className={loginless.Login_footer}>
                <span>账号由学院秘书统一向教务处教学信息中心申请</span>
                </div>
            </div>
            </div>
        )
    }
}


export default withRouter(Login);