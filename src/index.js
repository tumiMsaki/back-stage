import React from 'react';
import { HashRouter, Route} from 'react-router-dom'
import ReactDOM from 'react-dom';
import App from 'containers/App'
import Login from './Login/Login'
import './js/rem'

ReactDOM.render(
    <HashRouter>
        <div>
            <Route exact path="/" component={Login}></Route>
            <Route path="/content" component={App}></Route>
        </div>
    </HashRouter>,
    document.getElementById('root')
)