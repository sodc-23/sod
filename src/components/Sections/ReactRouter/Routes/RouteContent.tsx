import React from 'react';
import classnames from 'classnames/bind';
import { connect, useSelector, useDispatch } from 'react-redux';

import Icon from '~components/common/Icon';

import { RootState } from '~app/reducers';

import styles from '~components/Sections/ReactRouter/Routes/styles/RouteContent.scss';

const cx = classnames.bind(styles);

interface RouteContentProps {
  path: string;
  label: string;
  action: () => void;
  icon: string;
}

const RouteContent: React.FunctionComponent<RouteContentProps> = ({ path, label, action, icon }: RouteContentProps) => {
  const dispatch = useDispatch();
  const counter = useSelector((state: RootState) => state.counter);

  return (
    <div className={cx('route-content--container')}>
      <div className={cx('route-content--heading')}>
        <Icon icon="angle-right" />
        &nbsp;Connected to the Redux store at the&nbsp;<code>{path || '/'}</code>&nbsp;route
      </div>
      <div className={`${cx('route-content--counter')} m-t-xs`}>
        <Icon icon="angle-right" />
        &nbsp;<code>counter</code>: <code>{counter}</code>
      </div>
      <br />
      <div className="m-t-sm">
        <button className="button" onClick={() => dispatch(action())}>
          <Icon icon={icon} />
          &nbsp;{label} counter
        </button>
      </div>
    </div>
  );
};

export default RouteContent;
