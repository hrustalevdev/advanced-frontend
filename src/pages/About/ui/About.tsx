import React from 'react';

import styles from './About.module.scss';

interface IAboutProps extends React.HTMLAttributes<HTMLDivElement> {
  param?: string;
}

const About: React.FC<IAboutProps> = ({param, className, ...rest}) => {
  console.log(param);

  return <div className={className} {...rest}>ABOUT PAGE</div>;
};

export default About;
