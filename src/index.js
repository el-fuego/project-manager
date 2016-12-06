import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import root from './core/root';

ReactDOM.render(
  <AppContainer>
    {root}
  </AppContainer>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./core/root', () => {
    const nextRoot = require('./core/root').default; // eslint-disable-line global-require
    ReactDOM.render(
      <AppContainer>
        {nextRoot}
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
