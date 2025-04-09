import { ResolveOptions } from 'webpack';

/** Возвращает расширения, которые можно будет не указывать в импортах */
export function buildResolvers(): ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js'],
  }
}
