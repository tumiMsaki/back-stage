import React from 'react';
import left from '../../style/Left.less'
import More from './More'
class Left extends React.Component{
    constructor(props){
        super(props)
        this.state={
           show:false,
           data:[],
        }
        this.false = this.false.bind(this)
    }

    componentWillReceiveProps(props){
        this.setState({
            show:!this.state.show
        })
        setTimeout(()=>{
            console.log(props.data)
        },1000)
    }
    false = ()=>{
        this.props.esc();
        this.setState({
            show:!this.state.show
        })
    }
    render(){
        return(
            <div className={left.all}>
            <div className={[left.background,this.state.show&&left.background_show].join(' ')}>
               <div className={left.content}>
                    <div className={left.header}>
                        <div className={left.header_left}>
                            <div className={left.esc_btn} onClick={this.false}></div>
                            <div className={left.class}>
                                <span>{this.props.data.class}班</span>
                            </div>
                            <div className={left.stuNum}>
                                <span>共有{this.props.data.stuNum}人</span>
                            </div>
                            </div>
                            <div>
                                <div className={left.send}>
                                    <div className={left.send_ico}></div>
                                    <span>推送</span>
                                </div>
                            </div>
                    </div>
                    <More></More>
               </div>
            </div>
            </div>
        )
    }
}


export default Left;