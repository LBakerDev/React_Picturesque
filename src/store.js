import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import { syncHistoryWithStore} from 'react-router-redux';
import { browserHistory } from 'react-router';

// import the root reducer
import rootReducer from './reducers/index';
import initialState from './reducers/initialState';
//import comments from data
//import comments from './data/comments';
//import posts from './data/posts';


// Create store

export const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

// create the browser history
export const history = syncHistoryWithStore(browserHistory, store);
