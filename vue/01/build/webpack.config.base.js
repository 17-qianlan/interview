const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const createVueLoader = require('./vue-loader.config');

const isDev = process.env.NODE_ENV === 'development';

let config = {
    mode: 'development',
    target: 'web',
    entry: path.join(__dirname, '../client/main.js'),
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, '../dist'),
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.(vue|js|jsx)$/,
                loader: 'eslint-loader',
                exclude: /node_module/,
                enforce: 'pre'
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: createVueLoader(isDev)
            },
            {
                test: /\.s?css$/,
                use: ['vue-style-loader', isDev? 'style-loader': MiniCssExtractPlugin.loader, 'css-loader', {
                    loader: 'postcss-loader',
                    options: {
                        sourceMap: true
                    }
                }, 'sass-loader']
            },
            {
                test: /\.(png|svg|gif|jpg|jpeg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1024,
                            name: 'resource/[path][name]:[hash:8].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_module/
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.css', '.json', '.vue']
    }
}

module.exports =  config;
