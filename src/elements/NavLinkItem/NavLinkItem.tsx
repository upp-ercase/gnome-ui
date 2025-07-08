import classNames from 'classnames';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { usePathname } from '../../hooks/usePathname';

export const NavLinkItem = ({
  href,
  children,
  onClick,
  openNewTab = false,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
  openNewTab?: boolean;
}) => {
  const pathname = usePathname();
  const isCurrentPage = href === pathname;

  return (
    <NavigationMenu.Link asChild>
      <a
        href={href}
        onClick={onClick}
        className={classNames(
          'inline-block select-none before:bg-primary-500 underline-hover-effect dark:before:bg-slate-100 inverse:before:bg-slate-100',
          {
            'before:w-full': isCurrentPage,
          },
        )}
        target={openNewTab ? '_blank' : '_self'}
        rel={openNewTab ? 'noopener noreferrer' : undefined}
        aria-current={isCurrentPage ? 'page' : undefined}
      >
        {children}
      </a>
    </NavigationMenu.Link>
  );
};
