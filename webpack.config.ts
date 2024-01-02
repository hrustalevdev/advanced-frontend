import path from 'path';

import type { IBuildPaths, IEnv } from './config/webpack/types/config';
import { getWebpackConfig } from './config/webpack/webpackConfig';

export default (env: IEnv) => {
  const paths: IBuildPaths = {
    build: path.resolve(__dirname, 'build'),
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
  };

  const mode = env.mode || 'development';
  const port = env.port || 3000;

  const isDev = mode === 'development';

  return getWebpackConfig({
    mode,
    paths,
    isDev,
    port,
  });
};
