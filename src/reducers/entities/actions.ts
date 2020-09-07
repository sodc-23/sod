import { GetEntity } from 'redux-entity';

import { fetchMockData } from '~services/domain/domain-service';

import { EntityType } from '~reducers/entities/types';

/**
 * Thunk action that simulates a delayed API call
 * @returns {Function}  thunk
 */
export function fetchFoo() {
  return GetEntity(EntityType.Foo, fetchMockData());
}

/**
 * Thunk action that simulates a delayed API call
 * @returns {Function}  thunk
 */
export function fetchBar() {
  return GetEntity(EntityType.Bar, fetchMockData(), { append: true });
}

/**
 * Thunk action that simulates a delayed, failed API call
 * @returns {Function}  thunk
 */
export function fetchBaz() {
  return GetEntity(EntityType.Baz, fetchMockData(true));
}
