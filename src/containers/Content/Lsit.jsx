import React from 'react'
import list from '../../style/List.less'

class List extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }



    render(){
        return(
            <div className={list.content}></div>
        )
    }
}

export default List;