import React, {Component} from 'react'
import Button from './button'
import App from './App'
import { BrowserRouter as Router, Route } from "react-router-dom";
import User from './User'

class Main extends Component{
    render() {
        return(
        <Router>
            <header>This is header</header>
            <Route path='/btn' component={Button}/> 
            <Route path='/app' component={App}/>
            <Route path='/user' component={User}/>
            <footer>This is footer</footer>
        </Router>
        )
    }
}
export default Main;