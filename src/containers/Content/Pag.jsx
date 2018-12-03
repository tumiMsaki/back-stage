import React from 'react'
import pag from '../../style/Pag.less'
import list from './stu.json'
import list2 from './stu2.json'
class Pag extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data:list,
            list_data:[],
            checkbox:true,
            Allcheck:[]
        }
    }


    componentWillUpdate(){
        var arr=[]
            for(let i = 0;i<this.state.data.length;i++){
                    if(JSON.parse(sessionStorage.getItem(this.props.class)).indexOf(this.state.data[i].xh) === -1){
                        arr.push(false);
                    }else{
                        arr.push(true)
                    }
                }
                this.setState({
                    Allcheck:arr
                },()=>{
                    console.log(this.state.Allcheck)
                })
    }

    componentWillReceiveProps(props){
        // let arr=[],
        // listArr =[]
        // if(props.data){    
        //     for(let i=0;i<this.state.Allcheck.length;i++){
        //         arr.push(true)
        //         listArr.push(list[i].xh)
        //     }
        //     this.setState({
        //         Allcheck:arr
        //     },() =>{
        //         this.setState({
        //             list_data:listArr
        //         },() => {
        //             this.props.list(this.state.list_data)
        //         })
        //     })
        // }else{
        //     for(let i=0;i<this.state.Allcheck.length;i++){
        //         arr.push(false)
        //     }
        //     this.setState({
        //         Allcheck:arr,
        //         list_data:[]
        //     },() => {
        //         this.props.list(this.state.list_data)
        //     })
        // }
        if(props.page === 2){
            this.setState({
                data:list2
            })
        }else{
            this.setState({
                data:list
            })
        }
    }

    // componentWillMount(){
    //     var arr=[]
    //     for(let i = 0;i<this.state.data.length;i++){
    //         if(JSON.parse(sessionStorage.getItem('stuClass')).indexOf(this.state.data[i].id) === -1){
    //             arr.push(false);
    //         }else{
    //             arr.push(true)
    //         }
    //     }
    //     this.setState({
    //         Allcheck:arr
    //     },()=>{
    //         console.log(this.state.Allcheck)
    //     })
    // }

    check = (e,index) =>{
        var list = this.state.list_data;
        if(JSON.parse(sessionStorage.getItem(this.props.class)).indexOf(e.target.id) === -1){
            list.push(e.target.id)
            this.setState({
                list_data:list
            },() => {
                this.props.list(this.state.list_data)
            })
        }else{
            list.splice(this.state.list_data.indexOf(e.target.id),1)
            this.setState({
                list_data:list
            },() =>{
                this.props.list(this.state.list_data)
            })
        }
        var arr = this.state.Allcheck
        arr[index] = !arr[index]
        this.setState({
            Allcheck:arr
        })
    }
    render(){
        return(
            <div className={pag.content}>
            {this.state.data.map((i,index) => 
            <div className={pag.list} key={i.xh}>
                   <input type="checkbox" id={i.xh} className={pag.num} onChange={(e)=>{this.check(e,index)}} checked={this.state.Allcheck[index]}></input>
                        <label htmlFor={i.xh}></label>
                        <div className={pag.xh}>{index<9?'0'+(index+1):(index+1)}</div>
                        <div className={pag.name}><span>{i.xm}</span></div>
                        <div className={pag.stuNum}><span>{i.xh}</span></div>
                        <div className={pag.stuClass}><span>{i.bj}</span></div>
                        <div className={pag.stuCol}><span>{i.yxm}</span></div>
                        <div className={pag.ico}><span className={i.ico?pag.log_true:pag.log_false}></span></div>
            </div>
            )}
            </div>
        )
    }
}



export default Pag;