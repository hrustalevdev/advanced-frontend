declare module "*.svg" {
  import type { JSX, SVGProps } from "react";

  const Component: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  export default Component;
}
