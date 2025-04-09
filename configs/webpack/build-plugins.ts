import HtmlWebpackPlugin from 'html-webpack-plugin';
import { WebpackPluginInstance, ProgressPlugin } from 'webpack';

export function buildPlugins({htmlPath}: { htmlPath: string }): WebpackPluginInstance[] {
  const progressPlugin = new ProgressPlugin();

  /** Плагин подключает к HTML-файлу в нужном порядке все JS и CSS-файлы, которые были сгенерированы Webpack'ом */
  const htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: htmlPath,
  })

  /** Порядок подключения плагинов иногда имеет значение. Порядок выполнения плагинов - сверху вниз */
  return [
    progressPlugin,
    htmlWebpackPlugin,
  ]
}
