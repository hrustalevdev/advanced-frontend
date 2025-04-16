import { LoaderContext } from "webpack";

export type GetCssClassIdent = (
  context: LoaderContext<any>,
  localIdentName: string,
  /** Название класса в CSS */
  localName: string,
) => string;
