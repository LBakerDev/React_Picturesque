import React from 'react';
import { Route, IndexRoute } from 'react-router';
// Importing different views for application
import Home from './views/home';
import Show from './views/show';
import Edit from './views/edit';
import New from './views/new';
import App from './views/app';
{/*import NotFound from './views/notFound';*/}

// Forces / to load App with the main child as Homepage.
export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path = "/pictures/:id" component={Show} />
    <Route exact path = "/new" component={New} />
    <Route path="/pictures/:id/edit" component={Edit} />
  </Route>
);