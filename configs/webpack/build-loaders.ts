import { RuleSetRule } from 'webpack';

/** Возвращает массив лоадеров для обработки файлов отличных от JS */
export function buildLoaders(): RuleSetRule[] {
  const typescriptLoader: RuleSetRule = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }

  /** Порядок лоадеров имеет значение! Порядок выполнения лоадеров - снизу вверх! */
  return [
    typescriptLoader,
  ]
}
