import React from 'react'
import pag from '../../style/Pag.less'
class Pag extends React.Component{
    constructor(props){
        super(props)
        this.state={
            list:[],
            list_data:[],
            checkbox:true,
            Allcheck:[false,false,false]
        }
    }

    componentWillReceiveProps(props){
        let arr1 = []
        arr1.push(props.stu)
        this.setState({
            list:arr1
        },()=>{
            var arr=[]
                for(let i = 0;i<this.state.list.length;i++){
                        if(JSON.parse(sessionStorage.getItem('stunum')).indexOf(this.state.list[i].xh) === -1){
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
            {this.state.list.map((i,index) => 
            <div className={pag.list} key={i.xh}>
                   <input type="checkbox" id={i.xh} className={pag.num} onChange={(e)=>{this.check(e,index)}} checked={this.state.Allcheck[index]}></input>
                        <label htmlFor={i.xh}></label>
                        <div className={pag.xh}>{index<10?'0'+index:index}</div>
                        <div className={pag.name}><span>{i.xm}</span></div>
                        <div className={pag.stuNum}><span>{i.xh}</span></div>
                        <div className={pag.stuClass}><span>{i.bj}</span></div>
                        <div className={pag.stuCol}><span>{i.yxm}</span></div>
                        <div className={pag.ico}><span className={i.xbs?pag.log_true:pag.log_false}></span></div>
            </div>
            )}
            </div>
        )
    }
}



export default Pag;