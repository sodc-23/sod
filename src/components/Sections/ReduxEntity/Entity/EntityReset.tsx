import * as React from 'react';

interface EntityReset {
  name: string;
}

const EntityReset: React.FunctionComponent<EntityReset> = ({ name }: EntityReset) => (
  <div className="m-t-sm m-b-sm">
    Entity <code>{name}</code> has been cleared.
  </div>
);

export default EntityReset;
