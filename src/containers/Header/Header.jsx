import React from 'react';
import header from '../../style/Header.less'
class Header extends React.Component{
    constructor(){
        super()
        this.state={
            userName:'姚科'
        }
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
                            <div className={header.search_ico}></div>
                        </div>
                        </div>
                        <div className={header.content_left}>
                        <div className={header.userName}>
                            <span className={header.userName_val}>{this.state.userName}</span>
                        </div>
                        <div className={header.esc_btn}>
                            <span>退出</span>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Header;
