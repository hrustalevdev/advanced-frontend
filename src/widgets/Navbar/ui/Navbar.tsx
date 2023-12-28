import { ThemeSwitcher } from 'features/ThemeSwitcher';
import { FC, HTMLAttributes } from 'react';
import { cn } from 'shared/lib/classNames';
import { Link } from 'shared/ui/Link';

import styles from './Navbar.module.scss';

type INavbarProps = HTMLAttributes<HTMLDivElement>

export const Navbar: FC<INavbarProps> = ({className, ...rest}) => {
  return (
    <div className={cn(styles.wrapper, className)} {...rest}>
      <Link variant="secondary" to="/">MAIN</Link>
      <Link variant="secondary" to="/about">ABOUT</Link>
    </div>
  )
}
