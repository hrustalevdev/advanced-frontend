import type { ResolveOptions } from 'webpack';

export const getResolvers = (): ResolveOptions => {
  return {
    /** Указаны расширения, которые не надо указывать при импорте */
    extensions: ['.tsx', '.ts', '.js'],
  }
}
