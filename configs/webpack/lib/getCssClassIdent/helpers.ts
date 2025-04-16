import crypto from "node:crypto";
import path from "node:path";
import { LoaderContext } from "webpack";

export function createHash(input: string, length: number = 8): string {
  const hash = crypto
    .createHash("sha1")
    .update(input)
    .digest("base64url")
    .replace(/[^a-zA-Z0-9]/g, "");

  /** Если хэш начинается с цифры, то добавляем к нему `с` */
  const _hash = /^\d/.test(hash) ? `c${hash}` : hash;
  return _hash.substring(0, length);
}

export function getPathToModule({
  rootContext,
  resourcePath,
}: LoaderContext<any>): string {
  return path.posix.relative(rootContext, resourcePath);
}
