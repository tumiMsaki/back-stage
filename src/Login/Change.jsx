import React from 'react';
import changeless from '../style/Change.less'
import {change} from '../apis/index'


class Change extends React.Component{
    constructor(props){
        super(props)
        this.state={
            userName:'',
            psw:'',
            psw2:''
        }
    }

    Login = () => {
        if(this.state.psw === this.state.psw2){
            var data = `username=${this.props.userName}&passwordOld=${this.props.password}&passwordNew1=${this.state.psw}&passwordNew2=${this.state.psw2}`;
            change(data).then(resp => {
                if(resp.data.status === 200){
                    window.removeEventListener('keydown',this.keypress);
                    this.props.jump()
                }else{
                    alert('err')
                }  
            })
        }
        }

    componentDidMount() {
        window.addEventListener('keydown', this.keypress)
     }

     componentWillReceiveProps(props){
        console.log(props)
         console.log(props.name)
         this.setState({
            userName:props.name
         })
     }

    pwsChange = (e) =>{
        this.setState({
            psw:e.target.value
        })
    }

    pwsChange2 = (e) =>{
        this.setState({
            psw2:e.target.value
        })
    }

    keypress = (e) =>{
        if(e.keyCode===13){
        if(this.state.psw === this.state.psw2){
            var data = `username=${this.props.userName}&passwordOld=${this.props.password}&passwordNew1=${this.state.psw}&passwordNew2=${this.state.psw2}`;
            change(data).then(resp => {
                if(resp.data.status === 200){
                    window.removeEventListener('keydown',this.keypress);
                    this.props.jump()
                }else{
                    alert('err')
                }  
            })
        }
    }
}

    render(){
        return(
            <div className={changeless.body}>
            <div className={changeless.Login}>
                <div className={changeless.Login_log}>
                    <div className={changeless.Login_log_ico}></div>
                    <div className={changeless.Login_log_word}>
                    <span>信息通知系统后台管理</span>
                    </div>
                </div>
                <div className={changeless.title}>
                    <span>尊敬的<span className={changeless.teacher_name}>{sessionStorage['teacher_name']}</span>老师，由于您是第一次登录信息通知系统后台管理，您需要对密码进行重置，以保证信息的安全性</span>
                </div>
                <div>
                    <div className={changeless.Login_user}>
                        <div className={changeless.Login_user_ico}></div>
                        <div className={changeless.Login_user_val}>
                        <input type="password" placeholder="新密码" onChange={this.pwsChange2.bind(this)}></input>
                        </div>
                    </div>
                    <div className={changeless.Login_pws}>
                        <div className={changeless.Login_pws_ico}></div>
                        <div className={changeless.Login_pws_val}>
                            <input type="password" placeholder="确定密码" onChange={this.pwsChange.bind(this)}></input>
                        </div>
                    </div>
                    <div className={changeless.Login_btn}>
                    <span onClick={this.Login.bind(this)}>登陆</span>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}


export default Change;