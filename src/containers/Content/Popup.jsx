import React from 'react';
import Mod from './Mod'
import popus from '../../style/Popus.less'
class Popus extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data:''
        }
    }
    render(){
        return(
            <div className={popus.occlusion}>
                <div className={popus.content}>
                    <div className={popus.header}>
                        <span>消息发送</span>
                    </div>
                    <div className={popus.mod}>
                        <span>选择模板</span>
                        <input></input>
                    </div>
                    <Mod></Mod>
                    <div className={popus.btn}>
                        <div className={popus.esc_btn}>
                            <span onClick={this.props.data_false}>取消</span>
                        </div>
                        <div className={popus.send_btn}>
                            <span>发送</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Popus;