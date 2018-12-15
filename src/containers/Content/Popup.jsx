import React from 'react';
import Mod from './Mod'
import Mod2 from './Mod2'
import popus from '../../style/Popus.less'
import {
    TutorMessage,
    SchoolMessage,
    ClassByTutorMessage,
    ClassBySchoolMessage,
    AllBySchoolMessage,
    AllByTutorMessage
} from '../../apis/index'
class Popus extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data:'',
            mod:'1'
        }
        this.select = this.select.bind(this);
    }

    select = (e) =>{
        this.setState({
            mod:e.target.value
        })
    }

    send = () =>{
        console.log(this.props.class)
        if(this.state.mod === '1'){
            if(this.props.class){
                if(this.props.class.length <= 5){
                    let data = `grade=${this.props.class}&template=${sessionStorage['title']}&school=重庆邮电大学&time=${sessionStorage['time']}&content=${sessionStorage['ModContent']}&remark=remark`
                    AllBySchoolMessage(data).then(resp => {
                        console.log(resp)
                    }).catch(err => {
                        alert(err)
                    })
                }else{
                    let data = `classnum=${this.props.class}&template=${sessionStorage['title']}&school=重庆邮电大学&time=${sessionStorage['time']}&content=${sessionStorage['ModContent']}&remark=remark`
                    ClassBySchoolMessage(data).then(resp => {
                        console.log(resp)
                    }).catch(err => {
                        alert(err)
                    })
                }
            }else if(!this.props.class){
                let data = `xh=${sessionStorage['stunum']}&template=${sessionStorage['title']}&school=重庆邮电大学&time=${sessionStorage['time']}&content=${sessionStorage['ModContent']}&remark=remark`
                SchoolMessage(data).then(resp =>{
                    console.log(resp)
                }).catch(err => {
                    alert(err)
                })
            }  
        }else{
            if(this.props.class){
                if(this.props.class.length <= 5){
                    let data = `grade=${this.props.class}&template=${sessionStorage['title']}&time=${sessionStorage['time']}&content=${sessionStorage['ModContent']}&remark=remark`
                    AllByTutorMessage(data).then(resp => {
                        console.log(resp)
                    }).catch(err => {
                        alert(err)
                    })
                }else if(this.props.class.length >=5 && this.props.class.length <= 10){
                    let data = `classnum=${this.props.class}&template=${sessionStorage['title']}&time=${sessionStorage['time']}&content=${sessionStorage['ModContent']}&remark=remark`
                    ClassByTutorMessage(data).then(resp => {
                        console.log(resp)
                    }).catch(err => {
                        alert(err)
                    })
                }
            }else if(!this.props.class){
                let data = `xh=${sessionStorage['stunum']}&template=${sessionStorage['title']}&time=${sessionStorage['time']}&content=${sessionStorage['ModContent']}&remark=remark`
                TutorMessage(data).then(resp => {
                    console.log(resp.status)
                }).catch(err =>{
                    alert(err)
                })
            }
            
        }
        // var data = `xh=${sessionStorage['stunum']}&template=${sessionStorage['title']}&time=${sessionStorage['time']}&content=${sessionStorage['ModContent']}&remark=remark`
        // TutorMessage(data).then(resp => {
        //     console.log(resp.status)
        // }).catch(err =>{
        //     alert(err)
        // })
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
                        <select onChange={this.select}>
                            <option value="1">学校通知</option> 
                            <option value="2">老师私信</option> 
                        </select>
                    </div>
                    {this.state.mod === '1'? <Mod></Mod> :null}
                    {this.state.mod === '2'? <Mod2></Mod2> :null}
                    <div className={popus.btn}>
                        <div className={popus.esc_btn}>
                            <span onClick={this.props.data_false}>取消</span>
                        </div>
                        <div className={popus.send_btn} onClick={this.send.bind(this)}>
                            <span>发送</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Popus;