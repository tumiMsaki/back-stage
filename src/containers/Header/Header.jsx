import React from 'react';
import header from '../../style/Header.less'
import LeftSearch from '../Content/Left_Search'
class Header extends React.Component{
    constructor(props){
        super(props)
        this.state={
            userName:'姚科',
            left_show:false,
            data:'',
            random:''
        }
    }


    left_show = () =>{
        this.setState({
            left_show:!this.state.left_show,
        })
        setTimeout(()=>{
            this.setState({
                data:1
            })
        },10)
    }

    esc =() =>{
        setTimeout(()=>{
            this.setState({
            left_show:!this.state.left_show
        })
        },300)
        
    }

    escLogin = () =>{
        localStorage.clear();
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
                            <input type="text"></input>
                            </div>
                            <div className={header.search_ico} onClick={this.left_show}></div>
                        </div>
                        </div>
                        <div className={header.content_left}>
                        <div className={header.userName}>
                            <span className={header.userName_val}>{this.state.userName}</span>
                        </div>
                        <div className={header.esc_btn}>
                            <span onClick={this.escLogin.bind(this)}>退出</span>
                        </div>
                        </div>
                    </div>
                </div>
                {this.state.left_show?<LeftSearch data={this.props.data} esc={this.esc.bind(this)}></LeftSearch>:null}
            </div>
        )
    }
}


export default Header;
