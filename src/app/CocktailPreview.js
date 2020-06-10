import React, {Component} from 'react'

class CocktailPreview extends Component{
    render() {
        return(
            <div>
                <div>
                    <h1>{this.props.strDrink}</h1>
                    <img src={`${this.props.strDrinkThumb}`}></img>
                    <button>Order it now!</button>
                </div>
            </div>)
    }
}
export default CocktailPreview;