const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/js/index.js', // точка входа (может быть пустым файлом)
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  devServer: {
    static: [
      {
        directory: path.join(__dirname, 'dist'),
      },
      {
        directory: path.join(__dirname, 'src'),
        publicPath: '/',
      }
    ],
    hot: true,
    open: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // путь к вашему HTML
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        type: 'asset/resource', // Webpack 5+
        generator: {
          filename: 'img/[name][ext]', // сохранит в dist/img/ чтобы соответствовать путям в HTML
        },
      },
    ],
  },
};