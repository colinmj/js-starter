// Webpack uses this to work with directories
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


// This is the main configuration object.
// Here, you write different options and tell Webpack what to do
module.exports = {

  // Path to your entry point. From this file Webpack will begin its work
  entry: ["regenerator-runtime/runtime.js", "./src/index.js"],

  plugins: [
  new HtmlWebpackPlugin({
  	title: 'Development',
  	template:'./index.html'
  }),
  new MiniCssExtractPlugin({
   filename: "[name].css",
   chunkFilename: "[id].css"
 }),
  ],

  devServer: {
  	static: './dist',
  },

  // Path and filename of your result bundle.
  // Webpack will bundle all JavaScript into this file
  output: {
  	path: path.resolve(__dirname, 'dist'),
  	publicPath: '',
  	filename: 'bundle.js'
  },

  module: {
  	rules: [
  	{
  		test: /\.js$/,
  		exclude: /(node_modules)/,
  		use: {
  			loader: 'babel-loader',
  			options: {
  				presets: ['@babel/preset-env']
  			}
  		}
  	}
  	]
  },


  module: {
    rules: [
    {
      test: /\.s[ac]ss$/i,
      use: [
      
      "style-loader",

      "css-loader",
      
      "sass-loader",
      ],
    },
    ],
  },

  // Default mode for Webpack is production.
  // Depending on mode Webpack will apply different things
  // on the final bundle. For now, we don't need production's JavaScript 
  // minifying and other things, so let's set mode to development
  mode: 'development',
};