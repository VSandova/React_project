import React, {Component} from 'react'
import Button from './app/button'
import App from './app/App'
import { BrowserRouter as Router, Route } from "react-router-dom";
import User from './app/User'
import Cocktail from './app/Cocktail';
import CocktailPreview from './app/CocktailPreview';

class Main extends Component{
    render() {
        return(
        <Router>
            <header>This is header</header>
            <Route path='/btn' component={Button}/> 
            <Route path='/app' component={App}/>
            <Route path='/user' component={User}/>
            <Route path='/cocktails' component={Cocktail}/>
            <Route path='/cocktailPreview' component={CocktailPreview}/>
            <footer>This is footer</footer>
        </Router>
        )
    }
}
export default Main;