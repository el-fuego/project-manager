import { createStore, compose, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promised';

import reducers from '../reducers';

function reduxStore(initialState) {
  let middleware = applyMiddleware(promiseMiddleware);

  if (window.devToolsExtension) {
    const devTools = window.devToolsExtension();
    middleware = compose(middleware, devTools);
  }

  const store = middleware(createStore)(reducers, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      // We need to require for hot reloadign to work properly.
      const nextReducer = require('../reducers');  // eslint-disable-line global-require

      store.replaceReducer(nextReducer);
    });
  }

  return store;
}

export default reduxStore;
