import React from 'react';
import Header from './Header/Header'
import Content from './Content/Content'
// import Footer from './Footer'

class App extends React.Component{
    render(){
        return(
            <div>
                <Header></Header>
                <Content></Content>
            </div>
        )
    }
}


export default App
