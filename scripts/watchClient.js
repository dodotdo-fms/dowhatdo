/* eslint no-console:0, import/no-extraneous-dependencies:0 */
const assign = require('lodash.assign');
const webpack = require('webpack');
const webpackConfig = require('../conf/webpack');

const compiler = webpack(assign(webpackConfig, { bail: true }));

compiler.apply(new webpack.ProgressPlugin((percentage, msg) => {
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`${(percentage * 100).toFixed(2)}% ${msg}`);
}));

compiler.watch({ aggregateTimeout: 300 }, (err, stats) => {
    if (err) throw new Error(err);

    if (stats.hasErrors() || stats.hasWarnings()) {
        console.log(stats.toString({
            colors: true,
            chunks: false,
            assets: false,
            children: false
        }));
    }
});
