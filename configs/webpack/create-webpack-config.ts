import { Configuration } from 'webpack';
import { buildLoaders } from './build-loaders';
import { buildPlugins } from './build-plugins';
import { buildResolvers } from './build-resolvers';

export function createWebpackConfig({mode, paths}: {
  mode: 'development' | 'production',
  paths: { entry: string; output: string; html: string; }
}): Configuration {
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
  }
}
