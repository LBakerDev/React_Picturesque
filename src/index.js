import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory} from 'react-router';
import registerServiceWorker from './registerServiceWorker';

// Importing different views for application
import Home from './views/home';
import Show from './views/show';
import Edit from './views/edit';
import New from './views/new';
import Main from './views/main';
{/*import NotFound from './views/notFound';*/}



const router = (
    
        <Router history={browserHistory}>
        
            <Route path="/" component = {Main}>
                <IndexRoute component={Home}></IndexRoute>
                <Route path = "/pictures/:id" component={Show}></Route>
            </Route>
        
        </Router>

    )

ReactDOM.render(router, document.getElementById('root'));
registerServiceWorker();
