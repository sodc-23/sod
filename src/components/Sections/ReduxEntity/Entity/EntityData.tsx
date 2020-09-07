import * as React from 'react';
import { format } from 'date-fns';

import { Icon } from '~components/common';
import { CheckIcon } from '~components/common/Icon';

interface EntityDataProps {
  name: string;
  append: boolean;
  lastUpdated?: Date;
}

const EntityData: React.FunctionComponent<EntityDataProps> = ({ name, append, lastUpdated }: EntityDataProps) => {
  const action = append ? 'Appending to ' : 'Fetch for ';
  const date = lastUpdated && format(new Date(lastUpdated), 'pp');
  return (
    <div className="m-t-sm m-b-sm">
      <CheckIcon /> {action} <code>{name}</code> @ <code>{date}</code>
    </div>
  );
};

export default EntityData;
