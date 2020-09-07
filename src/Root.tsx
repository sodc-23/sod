import * as React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import ConfigService from '~services/common/config-service';

import App from '~components/App';

const Root = ({ store }: { store: any }) => (
  <Provider store={store}>
    <BrowserRouter basename={ConfigService.getPublicBasename()}>
      <App />
    </BrowserRouter>
  </Provider>
);

export default Root;
