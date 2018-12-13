import React from 'react'
import loading from '../../style/Loading.less'


class Loading extends React.Component{
    render(){
        return(
            <div className={loading.ddra}>
                <div className={[loading.ddr,loading.ddr1].join(' ')}></div>
                <div className={[loading.ddr,loading.ddr2].join(' ')}></div>
                <div className={[loading.ddr,loading.ddr3].join(' ')}></div>
                <div className={[loading.ddr,loading.ddr4].join(' ')}></div>
                <div className={[loading.ddr,loading.ddr5].join(' ')}></div>
            </div> 
        )
    }
}

export default Loading