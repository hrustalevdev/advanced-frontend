import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';
import type { WebpackPluginInstance } from 'webpack';
import { IBuildOptions } from './types/config';

export const getPlugins = ({paths}: IBuildOptions): WebpackPluginInstance[] => {
  return [
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
    })
  ]
}
