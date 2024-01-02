import type { ButtonHTMLAttributes, FC } from 'react';

import { cn } from '../../lib/classNames';

import styles from './Button.module.scss';

type EVariants = 'primary' | 'secondary' | 'text';

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: EVariants;
}

export const Button: FC<IButtonProps> = ({
  className,
  variant = 'primary',
  children,
  ...rest
}) => {
  return (
    <button
      className={cn(styles.wrapper, styles[variant], className)}
      {...rest}
    >
      {children}
    </button>
  );
};
