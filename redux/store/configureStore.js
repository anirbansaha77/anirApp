import { createStore, applyMiddleware, combineReducers } from 'redux';
import reducer from '../reducer'
import thunk from 'redux-thunk';

export default function configureStore(initialState) {
	let store = null;
	if(initialState){
		store = createStore(combineReducers(reducer), initialState, applyMiddleware(thunk));
	} else {
		store = createStore(combineReducers(reducer), {}, applyMiddleware(thunk));
	}
	return store;
}