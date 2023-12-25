import path from 'path';
import webpack from 'webpack';
import { HashGenerator } from './HashGenerator';
import { StringCompressor } from './StringCompressor';

const hashGenerator = new HashGenerator();
const nameCompressor = new StringCompressor();
const classNameCompressor = new StringCompressor();
const hashCompressor = new StringCompressor();

export const getCssProdIdent = (context: webpack.LoaderContext<unknown>, localIdentName: string, localName: string): string => {
  const filePath = path.posix.relative(context.rootContext, context.resourcePath);
  const fileName = path.basename(context.resourcePath, '.module.scss');
  const hash = hashGenerator.getHashFrom(filePath, localName);

  const compressedName = nameCompressor.compress(fileName);
  const compressedClassName = classNameCompressor.compress(localName);
  const compressedHash = hashCompressor.compress(hash);

  return `${compressedName}_${compressedClassName}${compressedHash}`
}
