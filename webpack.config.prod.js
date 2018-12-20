var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
    plugins: [
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),
        new webpack.NamedModulesPlugin(),
        new ExtractTextPlugin('style.css'),
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false,
                screw_ie8: true
            },
            sourceMap: false
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production'),
                'BROWSER': true
            }
        }),
        new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /de/)
    ],
    devtool: 'cheap-module',
    entry: path.join(__dirname, 'client/index.js'),
    output: {
        path: path.resolve(__dirname, 'web/dist'),
        publicPath: "/dist/",
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }, {
                    loader: 'eslint-loader'
                }
                ]
            },
            {
                test: /\.scss$/,
                exclude: /\.lib\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader?modules&localIdentName=[name]---[local]---[hash:base64:5]','sass-loader']
                })
            },
        ]
    }
};

module.exports = config;