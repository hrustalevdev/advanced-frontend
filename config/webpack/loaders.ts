import type { RuleSetRule } from 'webpack';

/**
 * Т.к. WP из коробки понимает только js, то для того, чтобы в `модулях` можно было работать с файлами других
 * типов, используются `лоадеры`.
 */
export const getLoaders = (): RuleSetRule[] => {
  /** Лоадер для `typescript` */
  const typescriptLoader: RuleSetRule = {
    /** Регулярное выражение для определения типа файла который необходимо "пропустить" через лоадер. */
    test: /\.tsx?$/,
    /**
     * В данном поле указываем лоадер, который необходимо использовать. В данном случае - `ts-loader`.
     * Настройка typescript @link https://webpack.js.org/configuration/configuration-languages/#typescript
     */
    use: 'ts-loader',
    exclude: /node_modules/,
  }

  const sassLoader: RuleSetRule = {
    test: /\.sсss$/i,
    use: [
      'style-loader',
      'css-loader',
      'sass-loader',
    ],
  }

  return [
    typescriptLoader,
    sassLoader,
  ]
}
