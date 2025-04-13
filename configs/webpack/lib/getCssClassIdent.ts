import crypto from "node:crypto";
import path from "node:path";
import { LoaderContext } from "webpack";

type GetCssClassIdent = (
  context: LoaderContext<any>,
  localIdentName: string,
  /** Название класса в CSS */
  localName: string,
) => string;

export const getCssClassIdentDev: GetCssClassIdent = (
  context,
  _,
  localName,
) => {
  const pathToModule = path.posix.relative(
    context.rootContext,
    context.resourcePath,
  );

  const hash = _createHash(`${pathToModule}${localName}`);

  const moduleName = path.basename(pathToModule, ".module.scss");
  return `${moduleName}_${localName}__${hash}`;
};

export const getCssClassIdentProd: GetCssClassIdent = (
  context,
  _,
  localName,
) => {
  const pathToModule = path.posix.relative(
    context.rootContext,
    context.resourcePath,
  );

  const hash = "temporaryHash"; // hashGenerator.getHashFrom(pathToModule, localName);

  const moduleName = path.basename(pathToModule, ".module.scss");
  return `${moduleName}_${localName}__${hash}`;
};

function _createHash(input: string, length: number = 8): string {
  const hash = crypto
    .createHash("sha1")
    .update(input)
    .digest("base64url")
    .replace(/[^a-zA-Z0-9]/g, "");

  /** Если хэш начинается с цифры, то добавляем к нему `с` */
  const _hash = /^\d/.test(hash) ? `c${hash}` : hash;
  return _hash.substring(0, length);
}
