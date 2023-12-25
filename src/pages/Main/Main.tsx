import React from 'react';

interface IMainProps extends React.HTMLAttributes<HTMLDivElement> {
  param?: string;
}

const Main: React.FC<IMainProps> = ({param, className, ...rest}) => {
  console.log(param);

  return <div className={className} {...rest}>MAIN PAGE</div>;
};

export default Main;
