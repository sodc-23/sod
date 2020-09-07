import * as React from 'react';
import JSONPretty from 'react-json-pretty';
import { useSelector } from 'react-redux';

import GenericSection from '~components/Sections/GenericSection';

const themeProps = {
  keyStyle: 'color: #3298dc;',
};

/**
 * Stringify errors
 * @param key
 * @param value
 */
const replacer = (key: string, value: any) => {
  return value instanceof Error ? value.toString() : value;
};

const ReduxState = () => {
  const state = useSelector((state) => state);
  return (
    <GenericSection icon="tree" title="State Tree" subtitle={<span>Open Console to view dispatched actions</span>}>
      <JSONPretty {...themeProps} data={state} replacer={replacer} />
    </GenericSection>
  );
};

export default ReduxState;
