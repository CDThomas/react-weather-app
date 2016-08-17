// In webpack.config.js
var HtmlWebpackPlugin = require('html-webpack-plugin')
// config for Html webpack plugin
// Use app/index.html as a template and inject bundled code into the body of the file for dist
// This will end up with a dist/index.html with a script tag reference index_bundle.js
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: [
    // entry point in /app
    './app/index.js'
  ],
  output: {
    // output to /dist
    path: __dirname + '/dist',
    filename: 'index_bundle.js'
  },
  module: {
    // loaders to run on files
    loaders: [
      // babel loader used for jsx transpilation
      {test: /\.js$/, include: __dirname + '/app', loader: 'babel-loader'},
      {test: /\.css$/, include: __dirname + '/app', loader: 'style-loader!css-loader'}
    ]
  },
  // plugins go outside of module
  // Use the Html webpack plugin to generate dist html file from a template
  plugins: [HtmlWebpackPluginConfig]
}
