import path from "node:path";
import { createHash, getPathToModule } from "./helpers";
import { GetCssClassIdent } from "./types";

export const getCssClassIdentDev: GetCssClassIdent = (
  context,
  _,
  /** Название класса в CSS, напр. `button` */
  localName,
) => {
  const pathToModule = getPathToModule(context);
  const hash = createHash(`${pathToModule}${localName}`);

  const moduleName = path.basename(pathToModule, ".module.scss");
  return `${moduleName}_${localName}__${hash}`;
};
