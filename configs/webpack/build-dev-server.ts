import { Configuration as DevServerConfig } from 'webpack-dev-server'


export function buildDevServer({port}: { port: string | number }): DevServerConfig {
  return {
    port
  }
}
