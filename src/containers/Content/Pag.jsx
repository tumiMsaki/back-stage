import React from 'react'
import pag from '../../style/Pag.less'
import Loading from './Loading'
import {findClassStu,findAll} from '../../apis/index'

class Pag extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data:[],
            list_data:[],
            checkbox:true,
            Allcheck:[],
            loading:''
        }
    }

    componentWillReceiveProps(props){
        if(props.class.length <= 5){
            let data = `pagenum=${props.page}&grade=${props.class}`
            findAll(data).then(resp => {
                this.setState({
                    data:resp.data.data.list
                },()=>{ 
                    var arr=[]
                for(let i = 0;i<this.state.data.length;i++){
                        if(JSON.parse(sessionStorage.getItem('stunum')).indexOf(this.state.data[i].xh) === -1){
                            arr.push(false);
                        }else{
                            arr.push(true)
                        }
                    }
                    this.setState({
                        Allcheck:arr,
                        loading:2
                    })
                })
            }).catch(err => {
                alert(err)
            }) 
            this.setState({
                loading:1
            })
        }else{
            let data = `pagenum=${props.page}&bj=${props.class}`
            findClassStu(data).then(resp => {
            this.setState({
                data:resp.data.data.list
            },()=>{
                var arr=[]
            for(let i = 0;i<this.state.data.length;i++){
                    if(JSON.parse(sessionStorage.getItem('stunum')).indexOf(this.state.data[i].xh) === -1){
                        arr.push(false);
                    }else{
                        arr.push(true)
                    }
                }
                this.setState({
                    Allcheck:arr,
                    loading:2
                })
            })
            })
            .catch(err => {
                alert(err)
            })
            this.setState({
                loading:1
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
            <div>
            {this.state.loading === 1?<Loading></Loading>:
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
                        <div className={pag.ico}><span className={i.xbs?pag.log_true:pag.log_false}></span></div>
            </div>
            )}
            </div>
        }
            </div>
        )
    }
}



export default Pag;