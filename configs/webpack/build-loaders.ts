import { RuleSetRule } from 'webpack';

/** Возвращает массив лоадеров для обработки файлов отличных от JS */
export function buildLoaders(): RuleSetRule[] {
  const typescriptLoader: RuleSetRule = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }

  const stylesLoader: RuleSetRule = {
    test: /\.s[ac]ss$/i,
    /** Порядок лоадеров имеет значение! Порядок выполнения лоадеров - снизу вверх! */
    use: [
      /** Создаёт `style`-тег в HTML и добавляет в него CSS из JS-бандла */
      'style-loader',
      /** Преобразовывает CSS в строку и добавляет в JS */
      'css-loader',
      /** Преобразует Sass в CSS */
      'sass-loader',
    ],
  }

  return [
    typescriptLoader,
    stylesLoader,
  ]
}
