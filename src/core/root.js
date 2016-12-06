import React from 'react';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';

import configureStore from './store';
import routes from './routes';

const store = configureStore();

export default (
  <Provider store={store}>
    <Router history={hashHistory}>
      {routes}
    </Router>
  </Provider>
);
