import React from 'react';
import axios from 'axios';
import login from '../style/Login.less'
import { withRouter } from 'react-router-dom'


class Login extends React.Component{
    constructor(props){
        super(props)
        this.state={
            userName:'',
            psw:''
        }
    }

    Login = () => {
        // axios.post('',{

        // }).then((data)=>{
        // localStorage.token =
        // }).catch(()=>{

        // })
        if(this.state.userName==='admin'&&this.state.pws==='123456'){
            localStorage.user = 'admin'
            console.log(localStorage)
            this.props.history.push('/content')
        }else{
            alert('err')
        }
        
    }

    componentDidMount() {
        window.addEventListener('keydown', this.keypress)
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

    keypress = (e) =>{
        if(e.keyCode===13){
        // axios.post('',{
        // }).then((data)=>{
        // localStorage.token =
        // }).catch(()=>{

        // })
        if(this.state.userName==='admin'&&this.state.pws==='123456'){
            localStorage.user = 'admin'
            window.removeEventListener('keydown',this.keypress);
            this.props.history.push('/content')
            }else{
                alert('err')
            }
        }
    }

    render(){
        return(
            <div className={login.body}>
            <div className={login.Login}>
                <div className={login.Login_log}>
                    <div className={login.Login_log_ico}></div>
                    <div className={login.Login_log_word}>
                    <span>信息通知系统后台管理</span>
                    </div>
                </div>
                <div>
                    <div className={login.Login_user}>
                        <div className={login.Login_user_ico}></div>
                        <div className={login.Login_user_val}>
                            <input type="text" onChange={this.userChange.bind(this)}></input>
                        </div>
                    </div>
                    <div className={login.Login_pws}>
                        <div className={login.Login_pws_ico}></div>
                        <div className={login.Login_pws_val}>
                            <input type="password" placeholder="密码" onChange={this.pwsChange.bind(this)}></input>
                        </div>
                    </div>
                    <div className={login.Login_btn}>
                    <span onClick={this.Login.bind(this)}>登陆</span>
                    </div>
                </div>
                <div className={login.Login_footer}>
                <span>账号由学院秘书统一向教务处教学信息中心申请</span>
                </div>
            </div>
            </div>
        )
    }
}


export default withRouter(Login);