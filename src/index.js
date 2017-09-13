import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import App from './App';

// Importing different views for application
import Home from './views/home';
import Show from './views/show';
import Edit from './views/edit';
import New from './views/new';
{/*import NotFound from './views/notFound';*/}



const Root = () => {
    return (
        <Router>

                <Route exact path="/" component = {Home} />
                <Route exact path = "pictures/:id" component={Show} />
                <Route exact path = "pictures/:id/edit" component={Edit} />
                <Route exact path = "pictures/new" component={New} />
                {/*<Miss component={NotFound} />*/}

        </Router>

    )
}


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
