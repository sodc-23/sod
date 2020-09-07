import * as React from 'react';

import GenericSection from '~components/Sections/GenericSection';
import Entities from '~components/Sections/ReduxEntity/Entities';

import { URL } from '~app/const';

const ReduxEntity = () => (
  <GenericSection
    icon="sitemap"
    title="State Management"
    subtitle={
      <span>
        Utilizes <a href={URL.REDUX_ENTITY}>redux-entity</a> for domain entity management
      </span>
    }
  >
    <Entities />
  </GenericSection>
);

export default ReduxEntity;
