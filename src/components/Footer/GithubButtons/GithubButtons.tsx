import * as React from 'react';
import classnames from 'classnames/bind';

import GithubButton from '~components/Footer/GithubButtons/GithubButton';

import styles from '~components/Footer/GithubButtons/styles/GithubButtons.scss';

const cx = classnames.bind(styles);

const GithubButtons = () => (
  <div className={`${cx('github-buttons')} m-t-sm`}>
    <GithubButton
      label="Star"
      icon="octicon-star"
      href="mikechabot/react-boilerplate"
      ariaLabel="Star mikechabot/react-boilerplate on GitHub"
    />
    <GithubButton
      label="Fork"
      icon="octicon-repo-forked"
      href="mikechabot/react-boilerplate/fork"
      ariaLabel="Fork mikechabot/react-boilerplate on GitHub"
    />
    <GithubButton
      label="Watch"
      icon="octicon-eye"
      href="mikechabot/react-boilerplate/subscription"
      ariaLabel="Watch mikechabot/react-boilerplate on GitHub"
    />
  </div>
);

export default GithubButtons;
