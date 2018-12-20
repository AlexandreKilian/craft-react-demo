var path = require('path');
var webpack = require('webpack');

const config = {
    plugins: [
        new webpack.LoaderOptionsPlugin({
            debug: false
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'BROWSER': false,
                'NODE_ENV': JSON.stringify('development')
            }
        }),
        new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /de/)
    ],
    devtool: 'cheap-module-source-map',
    entry: path.join(__dirname, 'client/server.js'),
    output: {
        path: path.resolve(__dirname, 'app'),
        publicPath: "/assets/",
        filename: 'dev-server-bundle.js',
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
                loaders: [
                    'isomorphic-style-loader',
                    'css-loader?modules&localIdentName=[name]---[local]---[hash:base64:5]',
                    'sass-loader',
                ]
            },
        ]
    }
};

module.exports = config;