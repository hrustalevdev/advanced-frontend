import webpack from 'webpack';
import type { WebpackPluginInstance } from 'webpack';
import ReactRefreshPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { IBuildOptions } from './types/config';

export const getPlugins = ({paths, isDev}: IBuildOptions): WebpackPluginInstance[] => {
  const plugins = [
    /** Указываем куда вставить собранный `js` бандл. В данном случае за основу берём `index.html` из папки `public`. */
    new HtmlWebpackPlugin({
      template: paths.html,
    }),

    /** Для отображения процесса сборки. */
    new webpack.ProgressPlugin(),

    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:8].css",
      chunkFilename: "css/[name].[contenthash:8].css",
      ignoreOrder: true
    }),

    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
    }),
  ];

  if (isDev) {
    plugins.push(new ReactRefreshPlugin());
    plugins.push(new webpack.HotModuleReplacementPlugin());
  }

  return plugins;
}
