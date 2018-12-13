import React from 'react';
import left from '../../style/Left.less'
import More from './More'
import Popus from './Popup'
class Left extends React.Component{
    constructor(props){
        super(props)
        this.state={
           show:false,
           data:[],
           show_pupos:false,
           class:''
        }
        this.false = this.false.bind(this)
    }

    componentWillReceiveProps(props){
        this.setState({
            show:!this.state.show,
        },() => {
            sessionStorage.setItem("stunum",'[]')
        })
    }
    false = ()=>{
        this.props.esc();
        this.setState({
            show:!this.state.show
        },()=>{
            sessionStorage.setItem("stunum",'[]')
        })
    }

    send = () =>{
        this.setState({
            show_pupos:!this.state.show_pupos
        })
    }

    data_false =() =>{
        this.setState({
            show_pupos:!this.state.show_pupos
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
                                <span>{this.props.class}{this.props.class.length<=5?'级':'班'}</span>
                            </div>
                            <div className={left.stuNum}>
                                <span>共有{this.props.num}人</span>
                            </div>
                            </div>
                            <div>
                                <div className={left.send}>
                                    <div className={left.send_ico}></div>
                                    <span onClick={this.send.bind(this)}>推送</span>
                                </div>
                            </div>
                    </div>
                    {this.state.show_pupos?<Popus data_false={this.data_false.bind(this)}></Popus>:null}
                    <More class={this.props.class}></More>
               </div>
            </div>
            </div>
        )
    }
}


export default Left;