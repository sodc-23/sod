import React from 'react';
import classname from 'classnames/bind';

import { Icon } from '~components/common';

import logo from '~assets/logo.png';

import { URL } from '~app/const';

import styles from '~components/common/bulma/styles/NavBar.scss';

const cx = classname.bind(styles);

const NavBar = () => {
  return (
    <nav className={`navbar is-dark ${cx('nav-bar--container')}`} role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a href={URL.REPOSITORY} className="navbar-item is-size-3">
          <img src={logo} height={64} width={64} />
          <span>react-boilerplate</span>
        </a>
      </div>
      <div className="navbar-end">
        <div className="navbar-item">
          <a className="button is-dark" href={URL.NPM}>
            <span className="icon is-small has-text-danger">
              <Icon icon="npm" prefix="fab" size="fa-2x" />
            </span>
          </a>
        </div>
        <div className="navbar-item">
          <a className="button is-dark" href={URL.REPOSITORY}>
            <span className="icon is-small">
              <Icon icon="github" prefix="fab" size="fa-2x" />
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
