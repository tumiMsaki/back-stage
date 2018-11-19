import React from 'react';
import content from '../../style/content.less'
import Classify from './Classify'
class Content extends React.Component{
    constructor(){
        super()
        this.state={
            data:[{
                'class':'08011111',
                'stuNum':'1'
            },{
                'class':'08011112',
                'stuNum':'2'
            },{
                'class':'08011113',
                'stuNum':'3'
            },{
                'class':'08011114',
                'stuNum':'4'
            }],
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


export default Content;
