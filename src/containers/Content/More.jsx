import React from 'react'
import more from '../../style/More.less'
import Pag from './Pag'
import Pagination from './Pagination'
class More extends React.Component{
    constructor(props){
        super(props)
        this.state={
            chenckbox:false,
            data:'',
            page:1,
            class:''
        }
    }


    checkbox = () =>{
        this.setState({
            checkbox:!this.state.checkbox
        })
    }

    // list = (e) =>{
    //     this.props.list(e)
    // }

    pageCallbackFn = (e) => {
        this.setState({
            page:e
        })
    }
    render(){
        return(
            <div className={more.content}>
                <div className={more.page}>
                    <div className={more.page_content}>
                    <div className={more.header}>
                        <input type="checkbox" id="awe" className={more.num} onChange={this.checkbox.bind(this)}></input>
                        <label htmlFor="awe"></label>
                        <div className={more.xh}>序号
                        </div>
                        <div className={more.name}><span>姓名</span></div>
                        <div className={more.stuNum}><span>学号</span></div>
                        <div className={more.stuClass}><span>班级</span></div>
                        <div className={more.stuCol}><span>学院</span></div>
                        <div className={more.ico}><span>小帮手是否绑定</span></div>
                    </div>
                        <Pag data={this.state.checkbox} page={this.state.page} class={this.state.class}></Pag>
                        <Pagination pageCallbackFn = {this.pageCallbackFn.bind(this)}></Pagination>
                    </div>
                </div>
            </div>
        )
    }
}

export default More;