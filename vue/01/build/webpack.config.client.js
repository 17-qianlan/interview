const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const {VueLoaderPlugin} = require('vue-loader');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const merge = require('webpack-merge');

const isDev = process.env.NODE_ENV === 'development';

const configBase = require('./webpack.config.base');

const dev = {
    port: 8080,
    host: '0.0.0.0',
    hot: true,
    hotOnly: true,
    overlay: {
        errors: true
    },
    historyApiFallback: {
        index: '/index.html'
    },
    proxy: {

    }
};

const defaultPlugins = [
    new VueLoaderPlugin(),
    new HtmlPlugin({
        template: path.join(__dirname, 'template.html')
    }),
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: isDev? "'development'" : "'productions'"
        }
    })
];

let config;

if (isDev) {
    config = merge(configBase, {
        devServer: dev,
        plugins: defaultPlugins.concat([
            new webpack.HotModuleReplacementPlugin()
        ]),
        devtool: '#cheap-module-eval-source-map'
    })
} else {
    config = merge(configBase, {
        entry: {
            app: path.join(__dirname, '../client/main.js')
        },
        output: {
            filename: '[name].js'
        },
        optimization: {
            splitChunks: {
                cacheGroups: {
                    commons: {
                        name: 'commons',
                        chunks: 'initial',
                        minSize: 0,
                        minChunks: 2,
                        maxInitialRequests: 5
                    },
                    vendor: {
                        test: /node_modeule/,
                        name: 'vendor',
                        chunks: 'initial',
                        priority: 10,
                        enforce: true
                    }
                }
            },
            runtimeChunk: true
        },
        plugins: defaultPlugins.concat([
            new MiniCssExtractPlugin({
                filename: '[name].css',
                chunksFilename: '[].css'
            })
        ])
    })
}

module.exports =  config;
