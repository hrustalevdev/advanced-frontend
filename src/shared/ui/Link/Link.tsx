import type { FC } from 'react';
import type { LinkProps } from 'react-router-dom';
import { Link as BaseLink } from 'react-router-dom';
import { cn } from '../../lib/classNames';

import styles from './Link.module.scss';

type UVariants = 'primary' | 'secondary';

interface ILinkProps extends LinkProps {
  variant?: UVariants;
}

export const Link: FC<ILinkProps> = (props) => {
  const {className, variant = 'primary', children, ...rest} = props;

  return (
    <BaseLink className={cn(className, styles.wrapper, styles[variant])} {...rest}>
      {children}
    </BaseLink>
  )
};
