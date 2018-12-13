import React from 'react';
import header from '../../style/Header.less'
import LeftSearch from '../Content/Left_Search'
import {logout , findStu,findStuName} from '../../apis/index'
class Header extends React.Component{
    constructor(props){
        super(props)
        this.state={
            left_show:false,
            data:'',
            random:'',
            list:''
        }
    }


    left_show = () =>{
        if(isNaN(this.input.value)){
            var data = `stuname=${this.input.value}`
            findStuName(data).then(resp => {
                if(resp.data.data !== null){
                    this.setState({
                list:resp.data,
                left_show:!this.state.left_show
                })
                setTimeout(()=>{
                    this.setState({
                        data:1
                    })
                })
            }else{
                alert('请确定输入')
            }
            
        })
        }else{
            var data2 = `stunum=${this.input.value}`
            findStu(data2).then(resp => {
                if(resp.data.data !== null){
                        this.setState({
                    list:resp.data,
                    left_show:!this.state.left_show
                })
                setTimeout(()=>{
                    this.setState({
                        data:1
                    })
                })
                }else{
                    alert('请确定输入')
                }
            
        })
        }
    }

    esc =() =>{
        setTimeout(()=>{
            this.setState({
            left_show:!this.state.left_show
        })
        },300)
        
    }

    escLogin = () =>{
        logout()
        sessionStorage.removeItem('teacher_name');
        this.props.esc()
    }

    render(){
        return(
            <div>
                <div className={header.header}>
                    <div className={header.content}>
                    <div className={header.content_right}>
                        <div className={header.logo}>
                            <div className={header.logo_ico}></div>
                            <div className={header.logo_word}>
                                <span>信息通知平台</span>
                            </div>
                        </div>
                        <div className={header.search}>
                            <div className={header.search_val}>
                            <input type="text" ref = {input => this.input = input}></input>
                            </div>
                            <div className={header.search_ico} onClick={this.left_show}></div>
                        </div>
                        </div>
                        <div className={header.content_left}>
                        <div className={header.userName}>
                            <span className={header.userName_val}>{sessionStorage.teacher_name}</span>
                        </div>
                        <div className={header.esc_btn}>
                            <span onClick={this.escLogin.bind(this)}>退出</span>
                        </div>
                        </div>
                    </div>
                </div>
                {this.state.left_show?<LeftSearch data={this.props.data} esc={this.esc.bind(this)} list={this.state.list}></LeftSearch>:null}
            </div>
        )
    }
}


export default Header;
