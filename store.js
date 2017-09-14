import { createStore, compose} from 'redux';
import { syncHistoryWithStore} from 'react-router-redux';
import { browserHistory } from 'react-router';

// import the root reducer
import rootReducer from './reducers/index';

//import comments from data
import comments from './data/comments';
import posts from './data/posts';

// create an object for the default data
const defaultState = {
    posts,
    comments
};

// make the store
const store = createStore(rootReducer, defaultState);

// create the browser history
export const history = syncHistoryWithStore(browserHistory, store);

export default store;

