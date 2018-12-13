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
        var scrollToptimer = setInterval(function () {
            console.log("定时循环回到顶部")
            var top = document.body.scrollTop || document.documentElement.scrollTop;
            var speed = top / 4;
            if (document.body.scrollTop!=0) {
                document.body.scrollTop -= speed;
            }else {
                document.documentElement.scrollTop -= speed;
            }
            if (top == 0) {
                clearInterval(scrollToptimer);
            }
        }, 30)

        this.setState({
            left_show:!this.state.left_show,
            // data:1
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
        sessionStorage.removeItem('stuClass')
        },300)
        
    }


    render(){
        return(
            <div className={[classify.content,this.state.animate&&classify.content_show].join(' ')}>
                <div className={classify.class} onClick={this.left_show}><span>{this.props.data.grade}{this.props.data.grade.length<=5?'级':'班'}</span></div>
                <div className={classify.stuNum}><span>(共有{this.props.data.num}人)</span></div>
                <div className={classify.btn}>
                <span onClick={this.show}>推送消息</span>
                </div>
                {this.state.show?<Popus data_false={this.data_false.bind(this)} class={this.props.data.grade}></Popus>:null}
                {this.state.left_show?<Left class={this.props.data.grade} esc={this.esc.bind(this)} num={this.props.data.num}></Left>:null}
            </div>
        )
    }
}


export default Classify;