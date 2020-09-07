import * as React from 'react';
import classnames from 'classnames/bind';

import styles from '~components/Footer/GithubButtons/styles/GithubButton.scss';

const cx = classnames.bind(styles);

interface GithubButtonProps {
  label: string;
  icon: string;
  href: string;
  ariaLabel: string;
}

const GithubButton: React.FunctionComponent<GithubButtonProps> = ({
  label,
  icon,
  href,
  ariaLabel,
}: GithubButtonProps) => {
  return (
    <div className={cx('github-button--container')}>
      <a
        className="github-button"
        href={`https://github.com/${href}`}
        data-icon={icon}
        data-size="large"
        data-show-count={true}
        aria-label={ariaLabel}
      >
        {label}
      </a>
    </div>
  );
};

export default GithubButton;
