const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
   entry: path.join(__dirname,'src','index.js'),
   output:{
     path: path.join(__dirname,'build'),
     filename: 'index.bundle.js'
   },
   mode: process.env.NODE_ENV || 'development',
   devServer: {
     contentBase: path.join(__dirname,'src')
   },
   module:{
     rules: [
        {
           test: /\.js$/,
           exclude:/node_modules/,
           use: {
             loader: 'babel-loader'
           }
        },
        {
          test:/\.(css|scss)$/,
          use:['style-loader','css-loader','sass-loader']
        },
        {
          test:/\.(png|jpeg|jpg|svg)$/,
          use: {
            loader: 'file-loader'
          }
        }
     ]
   },
   plugins:[
      new HtmlWebpackPlugin({
         template: path.join(__dirname,'src','index.html')
      })
   ]
}
