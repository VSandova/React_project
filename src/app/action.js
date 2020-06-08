
  const ADD_TODO = 'ADD_TODO';

export default function fetchItems() {
   return dispatch => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(json => {
        dispatch({
            type: ADD_TODO,
            payload: json
        })
   })
}
}