import type { FC, HTMLAttributes } from 'react';

import { cn } from '../../lib/classNames';

import styles from './Loader.module.scss';

type TLoaderProps = HTMLAttributes<HTMLDivElement>;

export const Loader: FC<TLoaderProps> = ({ className, ...rest }) => {
  return (
    <div className={cn(styles.wrapper, className)} {...rest}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
