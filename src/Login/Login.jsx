import React from 'react';
import axios from 'axios';
import login from '../style/Login.less'
import { withRouter } from 'react-router-dom'


class Login extends React.Component{
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
                            <input type="text"></input>
                        </div>
                    </div>
                    <div className={login.Login_pws}>
                        <div className={login.Login_pws_ico}></div>
                        <div className={login.Login_pws_val}>
                            <input type="password" placeholder="密码"></input>
                        </div>
                    </div>
                    <div className={login.Login_btn}>
                    <span>登陆</span>
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


export default Login;