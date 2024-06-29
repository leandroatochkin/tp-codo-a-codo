const path = require('path');

module.exports = {
  entry: './src/index.js',  // Entry point of your application
  output: {
    filename: 'bundle.js',  // Output bundle file name
    path: path.resolve(__dirname, 'dist'),  // Output directory path
    publicPath: '/',  // Public URL of the output directory
  },
  module: {
    rules: [
      {
        test: /\.js$/,  // Apply this rule to .js files
        exclude: /node_modules/,  // Exclude node_modules directory
        use: {
          loader: 'babel-loader',  // Use babel-loader for .js files
          options: {
            presets: ['@babel/preset-env']  // Babel preset for modern JavaScript
          }
        }
      },
      {
        test: /\.css$/,  // Apply this rule to .css files
        use: ['style-loader', 'css-loader']  // Use style-loader and css-loader
      },
      {
        test: /\.(png|svg|jpg|gif)$/,  // Apply this rule to image files
        use: ['file-loader']  // Use file-loader for images
      }
    ]
  }
};
