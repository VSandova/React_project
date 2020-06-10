const init_State = {
        cocktails: []
}
  function cocktailReducer(state = init_State, action) {
    switch(action.type)
    {
      case 'ADD_TODO':
        return {...state, cocktails: action.payload};
          
        default:
		return state;
	  }
  }
  
export default cocktailReducer;