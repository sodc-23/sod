import React from 'react';
import classnames from 'classnames/bind';

import { useDispatch, useSelector } from 'react-redux';

import Entity from '~components/Sections/ReduxEntity/Entity';

import { fetchBar, fetchBaz, fetchFoo } from '~reducers/entities/actions';

import { RootState } from '~app/reducers';
import { EntityType } from '~reducers/entities/types';

import styles from '~components/Sections/ReduxEntity/styles/ReduxEntity.scss';

const cx = classnames.bind(styles);

const Entities = () => {
  const dispatch = useDispatch();
  const entities = useSelector((state: RootState) => state.entities);

  /**
   * Get the fetch thunk based on the entity type
   * @param type
   */
  const getLoadEntityThunk = (type: EntityType) => {
    switch (type) {
      case EntityType.Foo:
        return () => dispatch(fetchFoo());
      case EntityType.Bar:
        return () => dispatch(fetchBar());
      case EntityType.Baz:
        return () => dispatch(fetchBaz());
    }
  };

  return (
    <div className={`${cx('redux-entity--container')} notification is-light m-t-sm`}>
      {Object.values(EntityType).map((key: string) => (
        <Entity
          key={key}
          name={key}
          append={key === EntityType.Bar}
          entity={entities[key]}
          fetchEntity={getLoadEntityThunk(key as EntityType)}
        />
      ))}
    </div>
  );
};

export default Entities;
