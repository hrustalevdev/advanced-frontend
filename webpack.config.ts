import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';

const config: webpack.Configuration = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src', 'index.ts'),
  plugins: [
    new webpack.ProgressPlugin(),
    /** Плагин подключает к HTML-файлу в нужном порядке все JS и CSS-файлы, которые были сгенерированы Webpack'ом */
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
    })
  ],
  module: {
    /** Лоадеры для обработки файлов отличных от JS */
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    /** Данные расширения можно будет не указывать в импортах */
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
};

export default config;
