import React from 'react';
import ReactDOM, { render } from 'react-dom';

//import React-router dependencies
import { Router, Route, IndexRoute, browserHistory} from 'react-router';
import registerServiceWorker from './registerServiceWorker';

// Command which lets us use redux with react
import { Provider } from 'react-redux';

import store, { history } from './store';

// Importing different views for application
import Home from './views/home';
import Show from './views/show';
import Edit from './views/edit';
import New from './views/new';
import App from './views/app';
{/*import NotFound from './views/notFound';*/}



const router = (
    // Provider will expose our store to the actual application
    <Provider store={store}>
    
        <Router history={history}>
        
            <Route path="/" component = {App}>
                <IndexRoute component={Home}></IndexRoute>
                <Route path = "/pictures/:id" component={Show}></Route>
                <Route exact path = "/new" component={New}></Route>
            </Route>
        
        </Router>
    </Provider>

    )

ReactDOM.render(router, document.getElementById('root'));
registerServiceWorker();
