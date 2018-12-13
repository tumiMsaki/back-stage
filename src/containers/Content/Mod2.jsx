import React from 'react';
import mod from '../../style/Mod.less'
class Mod extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data:''
        }
    }

    titlechange(e){
        sessionStorage.setItem('title',e.target.value)
    }
    timechange(e){
        sessionStorage.setItem('time',e.target.value)
    }
    contentchange(e){
        sessionStorage.setItem('ModContent',e.target.value)
    }

    render(){
        return(
            <div className={mod.content}>
                <div className={mod.title}>
                    <span>标题2</span>
                    <input onChange={this.titlechange.bind(this)}></input>
                </div>
                <div className={mod.time}>
                    <span>时间2</span>
                    <input onChange={this.titlechange.bind(this)}></input>
                </div>
                <div className={mod.word}>
                    <span>内容2</span>
                    <textarea onChange={this.titlechange.bind(this)}></textarea >
                </div>
            </div>
        )
    }
}


export default Mod;