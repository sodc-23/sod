import React from 'react';
import classnames from 'classnames/bind';

import NavBar from '~components/common/bulma/Navbar';
import Footer from '~components/Footer';

import ReactRouter from '~components/Sections/ReactRouter';
import ReduxEntity from '~components/Sections/ReduxEntity';
import ReduxState from '~components/Sections/ReduxState';

import styles from '~components/styles/App.scss';

const cx = classnames.bind(styles);

const App = () => (
  <section className={cx('react-boilerplate')}>
    <NavBar />
    <section className={`section ${cx('section--body')}`}>
      <div className="container">
        <div className="columns">
          <div className="column">
            <ReactRouter />
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <ReduxEntity />
          </div>
          <div className="column">
            <ReduxState />
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </section>
);

export default App;
