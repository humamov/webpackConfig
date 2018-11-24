const path = require('path')
const glob = require('glob');
const webpack = require('webpack')

// Plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const PurifyCSSPlugin = require('purifycss-webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const src = path.resolve(__dirname, './src');
const dist = path.resolve(__dirname, 'dist');
const devMode = process.env.NODE_ENV !== 'production'
const switchMinify = false;

module.exports = {
  entry: {
    app: [path.resolve(src, 'index.js')]
  },
  output: {
    path: dist,
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js|jsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test:/\.(s*)css$/,
        use: [
          {
            loader: devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              modules: true,
              localIdentName: "[local]___[hash:base64:5]"
            }
          },
          {
            loader: "sass-loader"
          }
        ],
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin('dist', {}),
    new HtmlWebpackPlugin({
      title: 'Hello Humam',
      minify: {
        collapseWhitespace: switchMinify
      },
      hash: true,
      template: './index.html'
    }),
    new MiniCssExtractPlugin({
      filename: devMode ? '[name].css' : '[name].[hash].css',
      chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new PurifyCSSPlugin({
      // Give paths to parse for rules. These should be absolute!
      paths: glob.sync(path.join(__dirname, './*.html')),
    })

  ],
  devServer: {
    contentBase: path.join(__dirname, dist),
    compress: true,
    port: 3001,
    open: true,
    overlay: {
      warnings: true,
      errors: true,
    },
  }
}