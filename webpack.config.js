const path = require('path');

module.exports = {
  entry: {
    app: './src/index.js'
  },
  plugins: [
  ],
  devServer: {
    contentBase: './dist'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test:/\.s[ac]ss$/,
        use:['style-loader','css-loader', 'sass-loader']
      }
    ]
  },
  output: {
    filename: 'site.bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
