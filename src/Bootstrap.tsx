import * as React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import store from '~reducers/store';

import Root from '~app/Root';

import '~app/styles/global.scss';
import '~app/assets/favicon.ico';

ReactDOM.render(
  <AppContainer>
    <Root store={store} />
  </AppContainer>,
  document.getElementById('example-app')
);
