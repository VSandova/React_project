import Axios from "axios";

const ADD_TODO = 'ADD_TODO';
const url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail'

 export default function AllCocktail(){
    return dispatch => 
    Axios.get(url).then((json) => {
        console.log('test')
        dispatch({
            type: ADD_TODO, payload: json
        })
    })
 }