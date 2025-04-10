import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { RuleSetRule } from "webpack";
import { Mode } from "./create-webpack-config";

/** Возвращает массив лоадеров для обработки файлов отличных от JS */
export function buildLoaders({ mode }: { mode: Mode }): RuleSetRule[] {
  const isDev = mode === "development";

  const typescriptLoader: RuleSetRule = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  /**
   * * `style-loader` - добавляет в JS-бандл код, при выполнении которого в html-файл будет
   *    добавлен тег <style> с CSS-кодом который добавил в JS-бандл `css-loader`. Т.е. пока
   *    браузер не загрузит JS-бандл и не выполнит его, CSS не будет применен к странице.
   *    Использовать только в разработке.
   * * `MiniCssExtractPlugin.loader` - извлекает CSS в отдельные файлы.
   *    Создает файл CSS для каждого файла JS, который содержит CSS. B итоговом JS-бандле
   *    CSS не сохраняется.
   * * `css-loader` - преобразует CSS в строку и добавляет в JS
   * * `sass-loader` - преобразует Sass в CSS
   */
  const stylesLoader: RuleSetRule = {
    test: /\.s[ac]ss$/i,
    /** Порядок лоадеров имеет значение! Порядок выполнения лоадеров - снизу вверх! */
    use: [
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      "css-loader",
      "sass-loader",
    ],
  };

  return [typescriptLoader, stylesLoader];
}
