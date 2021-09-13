const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const tailwindcss = require('tailwindcss')
const autoprefixer = require('autoprefixer')

module.exports = {
    context: path.resolve(__dirname, '../src'),
    entry: './index.js',
    output: {
        filename:'js/[name].bundles.js',
        path: path.resolve(__dirname, '../dist'),
        assetModuleFilename: 'img/[hash][ext][query]',
    },
    module:{
        rules: [
            {
                test: /\.(js|jsx)$/, 
                exclude: /node_modules/, 
                use: { 
                    loader: 'babel-loader', 
                    options: { 
                        presets: ['@babel/preset-env','@babel/preset-react'] 
                    } 
                } 
            },{
                test: /\.(css|s[ac]ss)$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader',
                    {
                      loader: 'postcss-loader',
                      options: {
                        postcssOptions: {
                          ident: 'postcss',
                          plugins: [tailwindcss, autoprefixer],
                        },
                      },
                    },
                ],
            },{
                test: /\.(jpe?g|png|svg|gif)/i,
                type: 'asset/resource',
                generator: {
                  filename: 'img/[name][ext][query]'
                }
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash].css',
            chunkFilename: '[id].[contenthash].css',
          }),
        new HtmlWebpackPlugin({
            title: 'Project Title',
            favicon: '../public/favicon.ico',
            template: '../public/index.html', // template file
            filename: 'index.html', // output file
        }),
    ]
};