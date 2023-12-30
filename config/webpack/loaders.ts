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
  const babelLoader: RuleSetRule = {
    test: /\.[jt]sx?$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: [
          ['@babel/preset-env'],
        ],
        plugins: [
          [
            'i18next-extract',
            {
              locales: ['ru', 'en'],
              keyAsDefaultValue: true,
            }
          ]
        ],
      }
    }
  }

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

  const svgLoader: RuleSetRule = {
    test: /\.svg$/i,
    use: ['@svgr/webpack'],
  }

  const imageLoader: RuleSetRule = {
    test: /\.(png|jpg|jpeg|gif)$/i,
    type: 'asset/resource',
  }

  const fontLoader: RuleSetRule = {
    test: /\.(woff|woff2|eot|ttf|otf)$/i,
    type: 'asset/resource',
  }

  return [
    babelLoader,
    typescriptLoader,
    sassLoader,
    svgLoader,
    imageLoader,
    fontLoader,
  ]
}
