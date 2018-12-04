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
            Allcheck:[false,false,false,false,false,false,false,false,false,false,false,false]
        }
    }

    componentWillReceiveProps(props){
        if(props.page === 2){
            this.setState({
                data:list2
            },()=>{
                var arr=[]
            for(let i = 0;i<12;i++){
                    if(JSON.parse(sessionStorage.getItem('stunum')).indexOf(this.state.data[i].xh) === -1){
                        arr.push(false);
                    }else{
                        arr.push(true)
                    }
                }
                this.setState({
                    Allcheck:arr
                })
            })
        }else if(props.page === 1){
            this.setState({
                data:list
            },()=>{
                var arr=[]
            for(let i = 0;i<12;i++){
                    if(JSON.parse(sessionStorage.getItem('stunum')).indexOf(this.state.data[i].xh) === -1){
                        arr.push(false);
                    }else{
                        arr.push(true)
                    }
                }
                this.setState({
                    Allcheck:arr
                })
            })
        }
    }

    check = (e,index) =>{
        if(JSON.parse(sessionStorage.getItem('stunum')).indexOf(e.target.id) === -1){
        var arr1 = JSON.parse(sessionStorage.getItem('stunum'))
        arr1.push(e.target.id)
        sessionStorage.setItem('stunum',JSON.stringify(arr1))  
        }else{
            var arr2 = JSON.parse(sessionStorage.getItem('stunum'))
            arr2.splice(arr2.indexOf(e.target.id),1)
            sessionStorage.setItem('stunum',JSON.stringify(arr2))
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