import path from 'path';
import crypto from 'crypto';
import webpack from 'webpack';

interface IOptions {
  hashSalt?: string;
}

const usedHashes = new Set();

export const getCssDevIdent = (context: webpack.LoaderContext<unknown>, localIdentName: string, localName: string, options: IOptions): string => {
  /** Создаём хэш, основанный на местоположении файла и имени класса. */
  const filePath = path.posix.relative(context.rootContext, context.resourcePath);
  const fileName = path.basename(context.resourcePath, '.module.scss');

  const rawHash = crypto.createHash('md5');
  rawHash.update(`${filePath}${localName}`)

  if (options.hashSalt) {
    rawHash.update(options.hashSalt);
  }

  const hash = rawHash
    .digest('base64')
    .replace(/[^a-zA-Z0-9]/g, '')
    .slice(0, 5);

  /** Проверяем наличие коллизии. */
  if (usedHashes.has(hash)) {
    return getCssDevIdent(context, localIdentName, localName, {...options, hashSalt: Math.random().toString()})
  }

  usedHashes.add(hash);

  return `${fileName}_${localName}__${hash}`;
}
