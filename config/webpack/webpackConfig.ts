import { getDevServerConfig } from './devServer';
import { getLoaders } from './loaders';
import { getPlugins } from './plugins';
import { getResolvers } from './resolvers';
import type { IBuildOptions } from './types/config';
import type { Configuration } from 'webpack'

export const getWebpackConfig = (options: IBuildOptions): Configuration => {
  const {mode, paths, isDev} = options;

  return {
    /**
     * В `development` mode bundle содержит большое количество кода, код не минифицирован, содержит много комментариев, в
     * `production` mode код минифицируется, оптимизируется, комментарии удаляются.
     */
    mode,
    /** @link https://webpack.js.org/concepts/entry-points */
    entry: paths.entry,
    output: {
      /**
       * `name` - по умолчанию `main` (из `package.json?`), либо можно указать своё имя вместо шаблона со скобками.
       * `contenthash` - добавляет хеш к названию файла, чтобы браузер заменял закешированную предыдущую копию.
       * @link https://webpack.js.org/guides/caching#output-filenames
       */
      filename: '[name].[contenthash].js',
      path: paths.build,
      /** Удалить предыдущий бандл. */
      clean: true,
    },
    plugins: getPlugins(options),
    module: {
      rules: getLoaders(),
    },
    resolve: getResolvers(),
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? getDevServerConfig(options) : undefined,
  }
}
