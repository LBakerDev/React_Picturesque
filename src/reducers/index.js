// source reducer file which combines other reducers

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import posts from './posts';
import comments from './comments';

// Merge function takes three arguments. Router is also part of state
// which needs to be updated
const rootReducer = combineReducers({posts, comments, routing: routerReducer });

export default rootReducer;