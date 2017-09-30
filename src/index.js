import React from 'react';
import ReactDOM from 'react-dom';

//import React-router dependencies
import { Router } from 'react-router';
import registerServiceWorker from './registerServiceWorker';

// Command which lets us use redux with react
import { Provider } from 'react-redux';

import { store, history } from './store';
import routes from './routes';

const router = (
  // Provider will expose our store to the actual application
  <Provider store={store}>
      <Router history={history} routes={routes} />
  </Provider>

);

ReactDOM.render(router, document.getElementById('root'));
registerServiceWorker();
