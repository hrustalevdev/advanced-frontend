import path from 'path';
import { createWebpackConfig } from './configs/webpack/create-webpack-config';

const mode = 'development';
const paths = {
  entry: path.resolve(__dirname, 'src', 'index.ts'),
  output: path.resolve(__dirname, 'dist'),
  html: path.resolve(__dirname, 'public', 'index.html'),
};

export default createWebpackConfig({
  mode,
  paths,
});
