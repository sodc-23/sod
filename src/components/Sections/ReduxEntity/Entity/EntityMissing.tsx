import React from 'react';

import Icon from '~components/common/Icon';
import { Button } from '~components/common';

interface NoEntityProps {
  name: string;
  fetchEntity: () => void;
}

const EntityMissing: React.FunctionComponent<NoEntityProps> = ({ name, fetchEntity }: NoEntityProps) => (
  <>
    <div className="m-t-sm m-b-sm">
      <Icon icon="exclamation-triangle" className="has-text-danger" />
      &nbsp;Entity&nbsp;<code>{name}</code>&nbsp;does not exist on&nbsp;<code>entities</code>
    </div>
    <Button icon="download" onClick={fetchEntity} theme="is-info">
      Fetch
    </Button>
  </>
);

export default EntityMissing;
