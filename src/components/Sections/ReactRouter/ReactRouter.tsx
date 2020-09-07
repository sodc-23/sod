import * as React from 'react';

import GenericSection from '~components/Sections/GenericSection';
import AsyncTabbedRouter from '~components/Sections/ReactRouter/AsyncTabbedRouter';

import { URL } from '~app/const';

const ReactRouter = () => (
  <GenericSection
    icon="link"
    title="Router"
    subtitle={
      <span>
        Utilizes <a href={URL.REACT_ROUTER}>react-router</a> v5 for client-side routing
      </span>
    }
  >
    <AsyncTabbedRouter />
  </GenericSection>
);

export default ReactRouter;
