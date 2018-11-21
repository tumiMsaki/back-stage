import React from 'react'
import more from '../../style/More.less'
import Pag from './Pag'
class More extends React.Component{
    constructor(props){
        super(props)
        this.state={

        }
    }



    render(){
        return(
            <div className={more.content}>
                <div className={more.page}>
                    <div className={more.page_content}>
                    <div className={more.header}>
                        <input type="checkbox" id="awe" className={more.num}></input>
                        <label htmlFor="awe">序号</label>
                        <div className={more.name}><span>姓名</span></div>
                        <div className={more.stuNum}><span>学号</span></div>
                        <div className={more.stuClass}><span>班级</span></div>
                        <div className={more.stuCol}><span>学院</span></div>
                        <div className={more.ico}><span>小帮手是否绑定</span></div>
                    </div>
                        <Pag></Pag>
                    </div>
                </div>
            </div>
        )
    }
}

export default More;