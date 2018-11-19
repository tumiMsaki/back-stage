import React from 'react'
import more from '../../style/More.less'
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
                    <div className={more.page_content}></div>
                </div>
            </div>
        )
    }
}

export default More;