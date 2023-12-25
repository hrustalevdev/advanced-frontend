import React from 'react';
import { cn } from '../../shared/lib/classNames';

interface IMainProps extends React.HTMLAttributes<HTMLDivElement> {
  param?: string;
}

const Main: React.FC<IMainProps> = ({param, className, ...rest}) => {
  console.log(param);

  return <div className={cn(className)} {...rest}>MAIN PAGE</div>;
};

export default Main;
