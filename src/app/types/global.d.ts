declare module "*.scss" {
  interface IClassNames {
    [className: string]: string;
  }

  const classNames: IClassNames;
  export = classNames;
}

declare module '*.svg' {
  import React from 'react';
  const SVGComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  export = SVGComponent;
}

declare module "*.jpg" {
  const content: string;
  export = content;
}

declare module "*.png" {
  const content: string;
  export = content;
}

declare module "*.json" {
  const content: string;
  export = content;
}

declare const __IS_DEV__: boolean;
