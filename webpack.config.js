const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpackPwaManifest=require('webpack-pwa-manifest');
const { InjectManifest } = require('workbox-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
  mode: 'development',
  entry: {main:'./src/js/index.js',cards:"./src/js/cards.js"},
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      title: 'Namees Note  APP'
    }),
    new MiniCssExtractPlugin(),
    //service worker config
    
    new InjectManifest({
      swSrc:"./src-sw.js",
      swDest:"src-sw.js"
    }),
    //installation config
    // new webpackPwaManifest({
    //   fingerprints:false,
    //   inject:true,
    //   name:"MEMORIES",
    //   short_name:"memories",
    //   description:"this is namees mohammed memories app",
    //   background_color: '#225ca3',
    //   theme_color: '#225ca3',
    //   start_url:"/",
    //   publicPath:"/",
    //   icons:[{
    //     src:path.resolve('src/images/bg-registration-form-9.png'),
    //     sizes: [96, 128, 192, 256, 384, 512],
    //     destination:path.join('assets','icons')
    //   }]

    // })



  ],
module: {
  rules: [

    {
      test: /\.css$/i,
      use: [MiniCssExtractPlugin.loader, "css-loader"],
    },
 
    {
      test: /\.m?js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
          plugins: ['@babel/plugin-proposal-object-rest-spread', '@babel/transform-runtime'],

        }
      }
    },
  ],


 }
,

devServer: {
  hot: 'only',
open:true
    // static: {
    //   directory: path.join(__dirname, 'dist'),
    // },
    // compress: true,
    // port: 9000,
    // open:true
  }
};
