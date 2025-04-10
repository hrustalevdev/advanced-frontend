import { Configuration as DevServerConfig } from "webpack-dev-server";
import { Port } from "./create-webpack-config";

export function buildDevServer({ port }: { port: Port }): DevServerConfig {
  return {
    port,
  };
}
