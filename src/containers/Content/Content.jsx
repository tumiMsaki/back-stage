import React from 'react';
import content from '../../style/content.less'
import Classify from './Classify'
import { withRouter } from 'react-router-dom'
class Content extends React.Component{
    constructor(){
        super()
        this.state={
            random:'',
            data:''
        }
        
    }

    componentWillMount(){
        if(!sessionStorage['teacher_name']){
            this.props.history.push('/')
            alert('请登陆')
        }
        sessionStorage.setItem('stunum','[]')
        var arr = sessionStorage['content']
        arr = JSON.parse(arr)
        this.setState({
            data:arr
        })
     }

     componentWillReceiveProps(props){
        if(localStorage.length === 0){
            this.props.history.push('/')
        }
     }

    render(){
        return(
            <div>
                <div className={content.body}>
                <div className={content.header}>
                <span>消息通知分组</span>
                </div>
                <div className={content.content}>
                    {this.state.data.map((i,index) => <Classify data={i} key={index}></Classify>)}
                </div>
                </div>
            </div>
        )
    }
}


export default withRouter(Content);
