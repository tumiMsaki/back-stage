import React from 'react';
import left from '../../style/Left.less'
import More from './More'
class LeftSearch extends React.Component{
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
                                <span>搜索</span>
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


export default LeftSearch;