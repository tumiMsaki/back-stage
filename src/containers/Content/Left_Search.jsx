import React from 'react';
import left from '../../style/Left.less'
import MoreSearch from './More_Search'
import Popus from './Popup'
class LeftSearch extends React.Component{
    constructor(props){
        super(props)
        this.state={
           show:false,
           show_pupos:false,
           data:''
        }
        this.false = this.false.bind(this)
    }

    componentWillReceiveProps(props){
        this.setState({
            show:!this.state.show,
            data:props.list.data
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

    list = (e) =>{
        sessionStorage.setItem('stuClass',e)
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
                                <span>搜索</span>
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
                    <MoreSearch list={this.list.bind(this)} data={this.props.list.data}></MoreSearch>
               </div>
            </div>
            </div>
        )
    }
}


export default LeftSearch;