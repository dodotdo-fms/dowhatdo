/* eslint max-len:0, import/no-extraneous-dependencies:0 */
const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const resolvePath = path.resolve.bind(path, __dirname);

const env = {
    isProduction: () => process.env.NODE_ENV === 'production',
    isTest: () => process.env.NODE_ENV === 'test'
};

const extractStylesheet = new ExtractTextPlugin('[name].css');
const extractLibrary = new ExtractTextPlugin('vendor.css');

module.exports = (() => {
    const config = {};

    config.entry = env.isTest() ? {} : {
        framework: [
            'angular',
            'angular-ui-router',
            'ng-dialog',
            'ng-dialog/css/ngDialog.css',
            'ng-dialog/css/ngDialog-theme-default.css',
            'primer-css/build/build.css'
        ],
        app: resolvePath('../public/src/app/index.js')
    };

    config.output = env.isTest() ? {} : {
        path: resolvePath('../public/build'),
        publicPath: '/static',
        filename: '[name].js'
    };

    if (!env.isProduction()) {
        config.devtool = 'eval';
    }

    config.module = {
        preLoaders: [
            {
                test: /\.js$/,
                loader: 'eslint',
                include: env.isTest() ? [] : [resolvePath('../public/src')],
                exclude: /node_modules/
            }
        ],

        loaders: [
            { test: /\.js$/, loader: 'babel?compact=true', exclude: /node_modules/ },
            { test: /\.less$/, loader: env.isTest() ? 'null' : extractStylesheet.extract('style', 'css!postcss!less') },
            { test: /\.css$/, loader: env.isTest() ? 'null' : extractLibrary.extract('style', 'css!postcss') },
            { test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/, loader: 'file' },
            { test: /\.html$/, loader: 'raw' }
        ]
    };

    config.postcss = () => [autoprefixer({ browsers: ['> 1%', 'last 3 version'] })];

    config.plugins = [];

    if (!env.isTest()) {
        config.plugins.push(
            new CleanWebpackPlugin([resolvePath('../public/build')]),
            new webpack.optimize.CommonsChunkPlugin({
                name: ['framework'],
                filename: '[name].js',
                minChunks: Infinity,
                chunks: ['app']
            }),
            new HtmlWebpackPlugin({
                filename: 'index.html',
                template: path.resolve(__dirname, '../public/views/index.html'),
                inject: 'body',
                chunks: ['framework', 'app']
            }),
            extractLibrary,
            extractStylesheet
        );
    }

    if (env.isProduction()) {
        config.plugins.push(
            new webpack.NoErrorsPlugin(),
            new webpack.optimize.DedupePlugin(),
            new webpack.optimize.UglifyJsPlugin({ output: { comments: false } })
        );
    }

    return config;
})();
