import React from 'react';
import classnames from 'classnames/bind';

import { CogIcon } from '~components/common/Icon';

import styles from '~components/Sections/ReactRouter/styles/ChunkLoadingIcon.scss';

const cx = classnames.bind(styles);

const ChunkLoadingIcon = () => (
  <div className={`p-t-md ${cx('chunk-loading--icon')}`}>
    <CogIcon size="fa-2x" className="has-text-info" />
  </div>
);

export default ChunkLoadingIcon;
