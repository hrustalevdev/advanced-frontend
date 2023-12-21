export type UBuildMode = 'production' | 'development';

export interface IBuildPaths {
  entry: string;
  build: string;
  html: string;
}

export interface IEnv {
  mode: UBuildMode;
  port: number;
}

export interface IBuildOptions {
  mode: UBuildMode;
  paths: IBuildPaths;
  isDev: boolean;
  port: number;
}
