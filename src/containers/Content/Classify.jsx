import React from 'react';
import Popus from './Popup'
import Left from './Left'
import classify from '../../style/Classify.less'
class Classify extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data:'',
            show:false,
            left_show:false,
            animate:false
        }
    }

    componentDidMount(){
        this.setState({
            animate:true
        })
    }

    show = () =>{
        this.setState({
            show:!this.state.show
        })
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

    data_false =() =>{
        this.setState({
            show:!this.state.show
        })
    }

    esc =() =>{
        setTimeout(()=>{
            this.setState({
            left_show:!this.state.left_show
        })
        },300)
        
    }


    render(){
        return(
            <div className={[classify.content,this.state.animate&&classify.content_show].join(' ')}>
                <div className={classify.class} onClick={this.left_show}><span>{this.props.data.class}班</span></div>
                <div className={classify.stuNum}><span>(共有{this.props.data.stuNum}人)</span></div>
                <div className={classify.btn}>
                <span onClick={this.show}>推送消息</span>
                </div>
                {this.state.show?<Popus data_false={this.data_false.bind(this)}></Popus>:null}
                {this.state.left_show?<Left data={this.props.data} esc={this.esc.bind(this)}></Left>:null}
            </div>
        )
    }
}


export default Classify;