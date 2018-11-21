const path= require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports={
    entry:path.resolve(__dirname,'src/index.js'),
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: "bundle.js"
    },


    module: {
        rules: [
            {
                test:/\.js$/,
                use:"babel-loader",
                exclude:/node_modules/,
            },

            {
                test:/\.(css|scss)$/,
                use:[
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            modules: true,
                            camelCase: true,
                            localIdentName: '[local]___[hash:base64:5]',
                        },
                    },
                    'sass-loader',
                ]
            },

            {
                test:/\.less/,
                use:[
                    "less-loader",
                ]
            },

            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            bypassOnDebug: true,
                            disable: true
                        }
                    }
                ]
            },

            {
                test:/\.(jpg|png|gif)$/i,
                exclude:/node_modules/,
                use:{
                    loader: "url-loader",
                    options:{
                        limit:8000
                    }
                }

            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname,'src/index.html')
        })
    ],
    devServer: {
        
        compress: true,
        hot: true,
    }
};
