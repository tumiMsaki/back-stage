import React from 'react';
import Header from './Header/Header'
import Content from './Content/Content'
// import Footer from './Footer'

class App extends React.Component{
    constructor(props){
        super(props)
        this.state={
            random:''
        }
    }

    esc =()=>{
        this.setState({
            random:Math.random()
        })
    }

    render(){
        return(
            <div>
                <Header esc={this.esc.bind(this)}></Header>
                <Content data={this.state.random}></Content>
            </div>
        )
    }
}

export default App
