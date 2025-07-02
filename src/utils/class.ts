import classNames from 'classnames';

export function getSpacingClasses(key: string, size: string): string {
  return classNames({
    [`${key}-2 md:${key}-2.5 lg:${key}-3`]: size === 'xs',
    [`${key}-4 md:${key}-5 lg:${key}-6`]: size === 'sm',
    [`${key}-6 md:${key}-7.5 lg:${key}-9`]: size === 'base',
    [`${key}-10 md:${key}-12 lg:${key}-15`]: size === 'lg',
    [`${key}-16 md:${key}-20 lg:${key}-24`]: size === 'xl',
    [`${key}-26 md:${key}-32 lg:${key}-39`]: size === '2xl',
    [`${key}-42 md:${key}-52 lg:${key}-63`]: size === '3xl',
  });
} 