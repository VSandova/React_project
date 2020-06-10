import React, {Component} from 'react'
import AllCocktail from './redux/action/actionCocktail.js'
import {Link} from 'react-router-dom'
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux'

class Cocktail extends Component{
    componentDidMount() {
        this.props.AllCocktail();
    }
    render() {
        return(
            <div>
                <div> 
                {Array.isArray(this.props.cocktails) && this.props.cocktails.map((cocktail) => (
                    <div key={"1"}>
                        <h1>{cocktail.strDrink}</h1>
                        <img src={`${cocktail.strDrinkThumb}`}></img>
                        <button onClick={console.log(cocktail.idDrink)}><Link to={"/cocktailPreview"}>Preview</Link></button>
                    </div>
                ))}</div>
            </div>
        )}
}

const mapStateToProps = state => {
    return {
        cocktails: state.cocktails
    }
  }
  
const  mapDispatchToProps = dispatch => {
  return bindActionCreators({
    AllCocktail: AllCocktail
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Cocktail);
