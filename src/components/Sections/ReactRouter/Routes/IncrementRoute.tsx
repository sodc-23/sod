import React from 'react';

import RouteContent from '~components/Sections/ReactRouter/Routes/RouteContent';

import { incrementAction } from '~reducers/counter/actions';

const IncrementRoute = () => <RouteContent icon="plus" path="/" label="Increment" action={incrementAction} />;

export default IncrementRoute;
