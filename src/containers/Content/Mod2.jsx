import React from 'react';
import mod from '../../style/Mod.less'
class Mod extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data:''
        }
    }
    render(){
        return(
            <div className={mod.content}>
                <div className={mod.title}>
                    <span>标题2</span>
                    <input></input>
                </div>
                <div className={mod.time}>
                    <span>时间2</span>
                    <input></input>
                </div>
                <div className={mod.word}>
                    <span>内容2</span>
                    <textarea></textarea >
                </div>
            </div>
        )
    }
}


export default Mod;