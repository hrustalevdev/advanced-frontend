import type { RuleSetRule } from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { getCssDevIdent } from './lib/getCssDevIdent';
import { getCssProdIdent } from './lib/getCssProdIdent';
import type { IBuildOptions } from './types/config';

/**
 * Т.к. WP из коробки понимает только js, то для того, чтобы в `модулях` можно было работать с файлами других
 * типов, используются `лоадеры`.
 */
export const getLoaders = (options: IBuildOptions): RuleSetRule[] => {
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
    test: /\.scss$/i,
    use: [
      options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: true,
            getLocalIdent: options.isDev ? getCssDevIdent : getCssProdIdent,
          }
        }
      },
      'sass-loader',
    ],
  }

  return [
    typescriptLoader,
    sassLoader,
  ]
}
