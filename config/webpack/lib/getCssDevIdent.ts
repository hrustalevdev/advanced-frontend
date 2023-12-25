import path from 'path';
import webpack from 'webpack';
import { HashGenerator } from './HashGenerator';

const hashGenerator = new HashGenerator();

export const getCssDevIdent = (context: webpack.LoaderContext<unknown>, localIdentName: string, localName: string): string => {
  /** Создаём хэш, основанный на местоположении файла и имени класса. */
  const filePath = path.posix.relative(context.rootContext, context.resourcePath);
  const fileName = path.basename(context.resourcePath, '.module.scss');
  const hash = hashGenerator.getHashFrom(filePath, localName);

  return `${fileName}_${localName}__${hash}`;
}
