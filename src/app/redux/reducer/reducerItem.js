const initState = {
        on:false,
        items: [],
        currentUser: {
            id: '',
            name: '',
            username: '',
            email: '',
        }
    }
  
  function rootReducer(state = initState, action) {
    switch(action.type){
        case 'ADD_TODO':
            return{...state, items: action.payload}
            
    default:
    return state;
    }
  }
  
  export default rootReducer;