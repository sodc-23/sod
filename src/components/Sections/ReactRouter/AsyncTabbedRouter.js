import React from 'react';
import pMinDelay from 'p-min-delay';
import loadable from '@loadable/component';
import classNames from 'classnames/bind';
import { Route, useHistory, useLocation } from 'react-router-dom';
import { Tab, Tabs } from 'react-tabify';

import ChunkLoadingIcon from '~components/Sections/ReactRouter/ChunkLoadingIcon';

const DELAY = 500;
const options = {
  fallback: <ChunkLoadingIcon />,
};

const AsyncIncrement = loadable(
  () => pMinDelay(import('~components/Sections/ReactRouter/Routes/IncrementRoute'), DELAY),
  options
);
const AsyncDecrement = loadable(
  () => pMinDelay(import('~components/Sections/ReactRouter/Routes/DecrementRoute'), DELAY),
  options
);
const AsyncReset = loadable(
  () => pMinDelay(import('~components/Sections/ReactRouter/Routes/ResetRoute'), DELAY),
  options
);

const AsyncTabbedRouter = () => {
  const location = useLocation();
  const history = useHistory();

  return (
    <div className="notification m-t-sm">
      <Tabs id="router-example-tabs" activeKey={location.pathname} onSelect={(eventKey) => history.push(eventKey)}>
        <Tab eventKey="/" label="Increment">
          <Route exact path="/" component={AsyncIncrement} />
        </Tab>
        <Tab eventKey="/decrement" label="Decrement">
          <Route exact path="/decrement" component={AsyncDecrement} />
        </Tab>
        <Tab eventKey="/reset" label="Reset">
          <Route exact path="/reset" component={AsyncReset} />
        </Tab>
      </Tabs>
    </div>
  );
};

export default AsyncTabbedRouter;
