import type { ResolveOptions } from 'webpack';
import { IBuildOptions } from './types/config';

export const getResolvers = ({paths}: IBuildOptions ): ResolveOptions => {
  return {
    /** Указаны расширения, которые не надо указывать при импорте */
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    modules: [paths.src, 'node_modules'],
    mainFiles: ['index'],
    alias: {},
  }
}
