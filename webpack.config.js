'use strict';

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');

/**
 * react-boilerplate scripts
 */
const NodeUtils = require('./src/services/common/node-service');
const buildInfo = require('./scripts/buildInfo');
const appConfig = require('./config/config');

buildInfo();

const APP_DIR = path.join(__dirname, 'src');
const NODE_MODULES = path.join(__dirname, 'node_modules');

const isDevelopment = NodeUtils.isDevelopment();

/**
 * Get webpack plugins
 * @returns {*[]}
 */
function getPlugins() {
  return [
    new MiniCssExtractPlugin({
      filename: isDevelopment ? '[name].css' : '[name].[hash].css',
      chunkFilename: isDevelopment ? '[id].css' : '[id].[hash].css',
    }),

    /**
     * Inject bundles and CSS directly into the HTML template
     */
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
      inject: 'body',
    }),

    /**
     * Pass NODE_ENV and APP_CONFIG to the application so that
     * "ConfigService" and "NodeService" can be used within TS/TSX files.
     */
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        APP_CONFIG: JSON.stringify(appConfig),
      },
    }),
  ];
}

/**
 * Set up code splitting and chunking
 */
function getCodeSplittingConfig() {
  return {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'initial',
        },
      },
    },
    runtimeChunk: {
      name: 'manifest',
    },
    minimizer: [
      new TerserPlugin({
        sourceMap: true,
        terserOptions: {
          ecma: 8,
          mangle: false,
          keep_classnames: true,
          keep_fnames: true,
        },
      }),
    ],
  };
}

/**
 * Get Webpack file parsing rules
 * @returns {*[]}
 */
function getParserRules() {
  return [
    {
      test: /\.(sa|sc|c)ss$/,
      use: [
        {
          loader: MiniCssExtractPlugin.loader,
          options: {
            hmr: isDevelopment,
          },
        },
        'css-loader',
        'postcss-loader',
        'sass-loader',
      ],
      include: APP_DIR,
      exclude: NODE_MODULES,
    },
    {
      test: /\.(js|jsx)$/,
      loaders: 'babel-loader',
      include: APP_DIR,
      exclude: NODE_MODULES,
    },
    {
      test: /\.tsx?$/,
      use: 'ts-loader',
      include: APP_DIR,
      exclude: NODE_MODULES,
    },
    {
      test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/,
      loader: 'url-loader?limit=10000&name=[name]-[hash].[ext]',
      include: APP_DIR,
      exclude: NODE_MODULES,
    },
    {
      test: /\.ico$/,
      loader: 'file-loader?name=[name].[ext]',
      exclude: NODE_MODULES,
    },
    {
      test: /\.json$/,
      loader: 'json-loader',
      include: APP_DIR,
      exclude: NODE_MODULES,
    },
  ];
}

const webpackConfig = {
  /**
   * Configure the output directory and bundle name
   */
  output: {
    path: path.join(__dirname, 'docs'),
    filename: '[name].[hash].js',
  },
  resolve: {
    /**
     * Allow webpack to automatically resolve import extensions
     */
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', 'scss'],
    /**
     * Define aliases to be used within import statements.
     * Be sure to update "tsconfig.json" if you add/update/delete aliases.
     */
    alias: {
      '~app': path.resolve(APP_DIR),
      '~assets': path.resolve(APP_DIR, 'assets/'),
      '~components': path.resolve(APP_DIR, 'components/'),
      '~reducers': path.resolve(APP_DIR, 'reducers/'),
      '~services': path.resolve(APP_DIR, 'services/'),
    },
  },
  /**
   * Set up code splitting and chunking
   */
  optimization: getCodeSplittingConfig(),
  /**
   * Set up webpack plugins
   */
  plugins: getPlugins(),
  /**
   * Set up module parsing rules
   */
  module: {
    rules: getParserRules(),
  },
};

/**
 * Add additional configurations based on NODE_ENV
 */
if (!NodeUtils.isDevelopment()) {
  webpackConfig.entry = './src/Bootstrap';
  webpackConfig.mode = 'production';
} else {
  webpackConfig.devtool = 'eval';
  webpackConfig.mode = 'development';
  webpackConfig.entry = [
    'react-hot-loader/patch',
    `webpack-dev-server/client?http://localhost:${appConfig.example.port}`,
    'webpack/hot/only-dev-server',
    './src/Bootstrap',
  ];
  webpackConfig.plugins.push(new webpack.HotModuleReplacementPlugin());
}

module.exports = webpackConfig;
