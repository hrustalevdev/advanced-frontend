import HtmlWebpackPlugin from "html-webpack-plugin";
import { WebpackPluginInstance, ProgressPlugin } from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildPlugins({
  htmlPath,
}: {
  htmlPath: string;
}): WebpackPluginInstance[] {
  const progressPlugin = new ProgressPlugin();

  /** Плагин подключает к HTML-файлу в нужном порядке все JS и CSS-файлы, которые были сгенерированы Webpack'ом */
  const htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: htmlPath,
  });

  const miniCssExtractPlugin = new MiniCssExtractPlugin({
    filename: "css/[name].[contenthash:8].css",
    chunkFilename: "css/[name].[contenthash:8].css",
  });

  /** Порядок подключения плагинов иногда имеет значение. Порядок выполнения плагинов - сверху вниз */
  return [progressPlugin, htmlWebpackPlugin, miniCssExtractPlugin];
}
