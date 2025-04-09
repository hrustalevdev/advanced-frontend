import { Configuration } from 'webpack';
import { buildDevServer } from './build-dev-server';
import { buildLoaders } from './build-loaders';
import { buildPlugins } from './build-plugins';
import { buildResolvers } from './build-resolvers';

export function createWebpackConfig({mode, paths, port}: {
  mode: 'development' | 'production',
  paths: { entry: string; output: string; html: string; }
  port: number | string,
}): Configuration {
  const isDev = mode === 'development';

  return {
    mode,
    entry: paths.entry,
    output: {
      filename: '[name].[contenthash].js',
      path: paths.output,
      clean: true,
    },
    plugins: buildPlugins({htmlPath: paths.html}),
    module: {
      rules: buildLoaders(),
    },
    resolve: buildResolvers(),
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? buildDevServer({port}) : undefined,
  }
}
