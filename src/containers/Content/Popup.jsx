import React from 'react';
import Mod from './Mod'
import Mod2 from './Mod2'
import popus from '../../style/Popus.less'
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
        console.log(this.state.mod)
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
                            <option value="1">1</option> 
                            <option value="2">2</option> 
                        </select>
                    </div>
                    {this.state.mod === '1'? <Mod></Mod> :null}
                    {this.state.mod === '2'? <Mod2></Mod2> :null}
                    <div className={popus.btn}>
                        <div className={popus.esc_btn}>
                            <span onClick={this.props.data_false}>取消</span>
                        </div>
                        <div className={popus.send_btn}>
                            <span>发送</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Popus;