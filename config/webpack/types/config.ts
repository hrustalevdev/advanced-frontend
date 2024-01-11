export type UBuildMode = 'production' | 'development';

export interface IBuildPaths {
  entry: string;
  build: string;
  html: string;
  src: string;
}

export interface IEnv {
  mode: UBuildMode;
  port: number;
  analyze?: 'true';
}

export interface IBuildOptions {
  mode: UBuildMode;
  paths: IBuildPaths;
  port: number;
  isDev: boolean;
  isAnalyze: boolean;
}
