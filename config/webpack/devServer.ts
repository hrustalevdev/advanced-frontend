import type { Configuration as DevServerConfig } from 'webpack-dev-server';
import type { IBuildOptions } from './types/config';

export const getDevServerConfig = ({
  port,
}: IBuildOptions): DevServerConfig => {
  return {
    port,
    /** Будет автоматически открывать в браузере приложение. */
    open: false,
    hot: true,
    /** Для работы с роутингом в SPA. */
    historyApiFallback: true,
  };
};
