var path = require('path');
var webpack = require('webpack');

const config = {
    plugins: [
        new webpack.LoaderOptionsPlugin({
            debug: true
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.DefinePlugin({
            'process.env.BROWSER': true,
        }),
        new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /de/)

    ],
    devtool: 'eval-source-map',
    entry: {
        app: [
            'webpack-dev-server/client?http://localhost:8080',
            path.join(__dirname, '/client/index.js')
        ]
    },
    devServer: {
        historyApiFallback: true,
        hot: false,
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    },
    output: {
        path: path.resolve(__dirname, 'web/dev'),
        publicPath: "http://localhost:8080/assets/",
        filename: 'bundle.js',
        crossOriginLoading: "anonymous"
    },
    module: {
        rules: [
            {
                test: /locales/,
                loader: '@alienfast/i18next-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }, {
                    loader: 'eslint-loader',
                    options: {
                        fix: true
                    }
                }
                ]
            },
            {
                test: /\.scss$/,
                exclude: /\.lib\.scss$/,
                loader: 'style-loader!css-loader?modules&localIdentName=[name]---[local]---[hash:base64:5]!postcss-loader!sass-loader'
            }
        ]
    }
};

module.exports = config;