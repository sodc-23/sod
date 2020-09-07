import * as React from 'react';

import { Icon } from '~components/common';
import { ExclamationIcon } from '~components/common/Icon';

interface EntityFailureProps {
  name: string;
  error: any;
}

const EntityFailure: React.FunctionComponent<EntityFailureProps> = ({ name, error }: EntityFailureProps) => (
  <div className="m-t-sm m-b-sm">
    <ExclamationIcon /> Failed to fetch <code>{name}</code> due to{' '}
    <code className="has-text-danger">{error.toString()}</code>
  </div>
);

export default EntityFailure;
