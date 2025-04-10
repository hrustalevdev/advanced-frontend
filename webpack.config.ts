import path from 'path';
import { createWebpackConfig } from './configs/webpack/create-webpack-config';


export default function (env: { mode: 'development' | 'production', port: string | number }) {
  const mode = env.mode || 'development';

  const paths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: path.resolve(__dirname, 'dist'),
    html: path.resolve(__dirname, 'public', 'index.html'),
  };

  const port = env.port || 3000;

  return createWebpackConfig({
    mode,
    paths,
    port,
  });
}
