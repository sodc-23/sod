# <a href='https://github.com/mikechabot/react-boilerplate'><img src='https://raw.githubusercontent.com/mikechabot/react-boilerplate/gh-pages/assets/img/header_photo.png' alt='logo' aria-label='https://github.com/mikechabot/react-boilerplate' /></a>

A slightly opinionated yet dead simple boilerplate for ReactJS, Webpack 4, and React Router v4.

:heart: Async chunk loading
<br />
:heart: Typescript
<br />
:heart: Webpack 4
<br/>
:heart: React Router v5
<br />
:heart: Redux v4
<br/>
:heart: Code splitting
<br/>

<div align="center"> 
  <a href="https://travis-ci.org/mikechabot/react-boilerplate">
    <img src="https://travis-ci.org/mikechabot/react-boilerplate.svg?branch=master" alt="build status" />
  </a>
  <a href="https://david-dm.org/mikechabot/react-boilerplate">
    <img src="https://david-dm.org/mikechabot/react-boilerplate.svg" alt="dependency status" />
  </a>
  <a href="https://github.com/mikechabot/react-boilerplate/pulls">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" alt="prs welcome" />
  </a>
</div>

---

## Table of Contents

- [Live Demo](#live-demo)
- [Features](#features)
- [Getting Started](#getting-started)
- [Custom Configuration](#custom-config)

## <a id="live-demo">Live Demo</a>

http://mikechabot.github.io/react-boilerplate

---

## <a id="features">Features</a>

#### Build Process

- [Typescript](https://www.typescriptlang.org/) support
- Bundled with [webpack 4](https://webpack.js.org/configuration/)
- Implements async chunk loading via [@loadable/react](https://loadable-components.com/)
- Supports ES6 via [Babel](https://babeljs.io/) transpiling

#### State Management

- [redux-entity](https://github.com/mikechabot/redux-entity) for domain entity management
- [redux-thunk](https://github.com/gaearon/redux-thunk) for [asynchronous actions](https://github.com/mikechabot/react-boilerplate/blob/master/src/reducers/entities/actions.ts)
- [redux-logger](https://github.com/theaqua/redux-logger) for capturing actions

#### Routing

- [react-router v5](https://github.com/reactjs/react-router) for client-side [routing](https://github.com/mikechabot/react-boilerplate/blob/master/src/Root.tsx#L12)
- [Async chunk loading](https://github.com/mikechabot/react-boilerplate/blob/master/src/components/Sections/ReactRouter/AsyncTabbedRouter.js#L15) at the `react-router` level 

#### HTTP

- [Customizable](https://github.com/mikechabot/react-boilerplate/blob/master/src/services/data/ajax-service.js#L8), [Promise-based](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) HTTP support via [Axios](https://github.com/mzabriskie/axios)
- Utilizes a [a generic data service](https://github.com/mikechabot/react-boilerplate/blob/master/src/services/data/data-access-service.ts#L30) to easily fetch data
- Example of [implementing the data service](https://github.com/mikechabot/react-boilerplate/blob/master/src/services/domain/domain-service.ts#L7)

#### Styling

- Supports [SCSS & SASS](http://sass-lang.com/) syntax
- Browser compatibility via [autoprefixing](https://github.com/postcss/autoprefixer)
- [Bulma](https://bulma.io/documentation/overview/start/) for out-of-the-box styling

#### Develop & Deploy

- Environmental configurations for both webpack and redux
  - **Dev**: [webpack-dev-server](https://webpack.js.org/configuration/dev-server/) with [React Hot Loader](http://gaearon.github.io/react-hot-loader/). `redux-logger` enabled
  - **Prod**: [Express](http://expressjs.com/) server with `redux-logger` disabled

---

## <a id="getting-started">Getting Started</a>

1. `$ git clone https://github.com/mikechabot/react-boilerplate.git`
2. `$ npm install`
3. Launch environment:
   - **Production**: `$ npm start`
   - **Development**: `$ npm run dev`
   - Available at http://localhost:3060
     > Update port via [config.default.json](https://github.com/mikechabot/react-boilerplate/blob/master/config/config.default.json#L3), or override via [Custom Configuration](#custom-config)
4. Build assets for production:
   - `$ npm run build:prod`
5. Execute tests:
   - `$ npm test`

---

## <a id="custom-config">Custom Configuration</a>

Use [`cross-env`](https://github.com/kentcdodds/cross-env) or a comparable library/command to set the `ENV_CONFIG_PATH` to the path of your JSON configuration file:

`$ cross-env ENV_CONFIG_PATH=/path/to/config.json npm start`

> **Note**: This path is made available to Webpack **only**, however the contents of the file are stamped on a global variable during the build process (`process.env.APP_CONFIG`, see [webpack.config.js](https://github.com/mikechabot/react-boilerplate/blob/master/webpack.config.js#L46)), which is then accessible via the [ConfigService](https://github.com/mikechabot/react-boilerplate/blob/master/src/services/common/config-service.js#L19).

If your configuration is loaded successfully, you can expect to see the following indicator during startup:

```
** Using custom configuration located at "/path/to/config.json" **
```

#### Example

Using configuration file @ `C:\_workspaces\custom-config.json`

```bash
$ cross-env ENV_CONFIG_PATH="C:\_workspaces\custom-config.json" npm start

> react-boilerplate@5.0.0 start C:\_workspaces\react-boilerplate
> npm run build:prod && npm run start-prod-server


> react-boilerplate@5.0.0 build:prod C:\_workspaces\react-boilerplate
> npm run clean && cross-env NODE_ENV=production webpack --progress --colors


> react-boilerplate@5.0.0 clean C:\_workspaces\react-boilerplate
> rm -rf ./docs

** Using custom configuration located at "C:\_workspaces\custom-config.json" **
                    __      __        _ __             __     __
  _______ ___ _____/ /_____/ /  ___  (_) /__ _______  / /__ _/ /____
 / __/ -_) _ `/ __/ __/___/ _ \/ _ \/ / / -_) __/ _ \/ / _ `/ __/ -_)
/_/  \__/\_,_/\__/\__/   /_.__/\___/_/_/\__/_/ / .__/_/\_,_/\__/\__/
                                              /_/
┌────────────────────────────────────────────────────────────────────┐
│                                                                    │
│             Mike Chabot | Version 5.0.0 | License MIT              │
│                                                                    │
└────────────────────────────────────────────────────────────────────┘
<s> [webpack.Progress] 0% compiling
<s> [webpack.Progress] 10% building 0/0 modules 0 active
```
