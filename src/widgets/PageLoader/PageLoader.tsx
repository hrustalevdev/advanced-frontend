import type { FC, HTMLAttributes } from 'react';

import { cn } from 'shared/lib/classNames';
import { Loader } from 'shared/ui/Loader';

import styles from './PageLoader.module.scss';

type TPageLoaderProps = HTMLAttributes<HTMLDivElement>;

export const PageLoader: FC<TPageLoaderProps> = ({ className, ...rest }) => {
  return (
    <div className={cn(styles.wrapper, className)} {...rest}>
      <Loader />
    </div>
  );
};
