const path = require('path');
const webpack = require('webpack');
const merge = require("webpack-merge");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const APP_DIR = path.resolve(__dirname, '../src'); // <===== new stuff added here

module.exports = env => {
    const { PLATFORM, VERSION } = env;
    return merge([
        {
            entry: ['@babel/polyfill', APP_DIR], // <===== new stuff added here
            module: {
                rules: [
                    {
                        test: /\.js$/,
                        exclude: /node_modules/,
                        use: {
                            loader: 'babel-loader'
                        }
                    },
                    {
                        test: /\.scss|\.css$/,
                        use: [
                            PLATFORM === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
                            'css-loader',
                            'sass-loader'
                        ]
                    },
                    {
                        test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
                        loader: 'url-loader?limit=100000'
                    }
                ]
            },
            plugins: [
                new HtmlWebpackPlugin({
                    template: './src/index.html',
                    filename: './index.html'
                }),
                new webpack.DefinePlugin({
                    'process.env.VERSION': JSON.stringify(VERSION),
                    'process.env.PLATFORM': JSON.stringify(PLATFORM)
                }),
            ],
        }
    ])
};