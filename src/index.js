import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Main from './Main';
import { Provider } from 'react-redux';
import{ createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
//import rootReducer from './app/redux/reducer/reducerItem.js'
import cocktailReducer from './app/redux/reducer/reducerCocktail.js'

const store = createStore(cocktailReducer, applyMiddleware(thunk));
ReactDOM.render((
  <Provider store={store}>
  <React.StrictMode>
    <Main />
  </React.StrictMode>
  </Provider>
  ), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
