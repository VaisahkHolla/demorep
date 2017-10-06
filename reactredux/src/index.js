
import React from 'react';
import ReactDOM  from 'react-dom';
//import FirstComponent from './components/firstcomponent';
//import SearchComponent from './components/search_component'
import SearchApp from './components/search_app';
import {Provider} from 'react-redux';

import stores from './stores/searchStore';

import ReduxPromise from 'redux-promise';
//resolving promise can use thunk also instead of this
import {createStore,applyMiddleware} from 'redux';



const createStoreWithMiddleware=
	  applyMiddleware(ReduxPromise)(createStore);

// Connect Store With The Reducer
const store=createStoreWithMiddleware(stores);

// Register Views With The Stores
ReactDOM.render(<Provider store={store}><SearchApp /></Provider>,
				document.querySelector('.container'))
//provider helps in bridging react and redux

//ReactDOM.render(
//				<SearchApp/>
//				,
//document.querySelector('.container'))