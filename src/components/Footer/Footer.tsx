import * as React from 'react';
import classnames from 'classnames/bind';

import { Icon, Link } from '~components/common';
import GithubButtons from '~components/Footer/GithubButtons';

import { URL } from '~app/const';

import styles from '~components/Footer/styles/Footer.scss';

const cx = classnames.bind(styles);

const Repository = () => (
  <strong className="has-text-grey-light">
    <Icon icon="cloud" /> react-boilerplate
  </strong>
);

const DemoLink = () => <Link url={URL.DEMO}>source code</Link>;
const GithubLink = () => <Link url={URL.GITHUB}>Mike Chabot</Link>;
const LicenseLink = () => <Link url={URL.LICENSE}>MIT</Link>;

const Footer = () => {
  return (
    <footer className="footer has-text-grey-light">
      <div className="container has-text-centered">
        <div>
          <Repository /> by <GithubLink />
        </div>
        <div className="m-t-xs">
          The <DemoLink /> is licensed under <LicenseLink />
        </div>
        <GithubButtons />
      </div>
    </footer>
  );
};

export default Footer;
