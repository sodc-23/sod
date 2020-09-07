import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import isEmpty from 'lodash/isEmpty';

import { Button } from '~components/common';

import EntityData from '~components/Sections/ReduxEntity/Entity/EntityData';
import EntityReset from '~components/Sections/ReduxEntity/Entity/EntityReset';
import EntityMissing from '~components/Sections/ReduxEntity/Entity/EntityMissing';
import EntityFailure from '~components/Sections/ReduxEntity/Entity/EntityFailure';
import EntityLoading from '~components/Sections/ReduxEntity/Entity/EntityLoading';

import { DeleteEntity, ResetEntity, EntityState } from 'redux-entity';

interface EntityProps {
  name: string;
  append: boolean;
  entity: EntityState;
  fetchEntity: () => void;
}

const Entity: React.FunctionComponent<EntityProps> = ({ name, append, entity, fetchEntity }: EntityProps) => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchEntity();
  }, []);

  if (isEmpty(entity)) {
    return <EntityMissing name={name} fetchEntity={fetchEntity} />;
  }

  const { isFetching, data, error, lastUpdated } = entity;

  let body;

  if (error) {
    body = <EntityFailure name={name} error={error} />;
  } else if (isFetching) {
    body = <EntityLoading />;
  } else if (isEmpty(data)) {
    body = <EntityReset name={name} />;
  } else {
    body = <EntityData name={name} append={append} lastUpdated={lastUpdated} />;
  }

  return (
    <div className="m-b-sm">
      {body}
      <div className="field has-addons">
        <Button icon="download" onClick={fetchEntity} disabled={isFetching} loading={isFetching} theme="is-info">
          Fetch
        </Button>
        <Button icon="history" onClick={() => dispatch(ResetEntity(name))} disabled={isFetching}>
          Reset
        </Button>
        <Button icon="trash" onClick={() => dispatch(DeleteEntity(name))} disabled={isFetching} theme="is-danger">
          Delete
        </Button>
      </div>
    </div>
  );
};

export default Entity;
