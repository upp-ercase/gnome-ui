'use client';
import classNames from 'classnames';
import { NavMenu } from '../../elements/NavMenu/NavMenu';
import { NavMenuMobile } from '../../elements/NavMenuMobile/NavMenuMobile';
import { Button } from '../../elements/Button/Button';
import { ButtonGroup } from '../../elements/ButtonGroup/ButtonGroup';
import { Logo } from '../../elements/Logo/Logo';
// import { DarkModeToggle } from '../../elements/DarkModeToggle/DarkModeToggle';
import { NavigationType } from '../../types';
import { useStickyHeaderOnScrollDown } from '../../hooks';

export const Navigation: React.FC<{
  data: NavigationType;
}> = ({ data }) => {
  return (
    <>
      <Header data={data} />
      {data?.hotButtons && data.hotButtons.length > 0 && (
        <div
          className={classNames(
            'fixed',
            'w-full bottom-0 rounded-t-theme', //sm devices
            'lg:rotate-90 lg:translate-y-1/2 lg:translate-x-1/2 lg:rounded-t-none lg:rounded-b-theme lg:w-auto lg:bottom-1/2 lg:right-0', //big devices
          )}
        >
          <div className="relative flex justify-center py-2 bg-white bg-opacity-80 shadow-radiant lg:py-0 lg:bg-transparent">
            {data.hotButtons.map((button) => (
              <div key={button.id} className="flex-1 flex justify-center">
                <Button
                  {...button}
                  className="grow absolute lg:top-1/2 mx-1 lg:my-1"
                  size="base"
                >
                  {button.label}
                </Button>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};


const Header: React.FC<{ data: NavigationType }> = ({ data }) => {
  const sticky = useStickyHeaderOnScrollDown();
  if (data.layout === 'minimal') {
    return <MinimalHeader data={data} />;
  }
  return <StandardHeader data={data} sticky={sticky} />;
};

const StandardHeader: React.FC<{ data: NavigationType; sticky: boolean }> = ({
  data,
  sticky,
}) => {
  const {
    logo,
    logoRedirect,
    menuItems,
    showModeSelector,
    buttons,
    layout,
    inverse,
  } = data;
  return (
    <header
      className={classNames('relative z-[999] w-screen', {
        'sticky w-full z-50 top-0 animate-headerSlideIn': sticky,
        inverse: inverse && !sticky,
      })}
    >
      <div
        className={classNames(
          'absolute top-0 left-0 right-0 flex justify-center dark:text-slate-100 inverse:text-slate-100 transition-all duration-500',
          {
            'bg-white/60 backdrop-blur-2xl dark:bg-slate-800/80 border-b border-slate-200/50 dark:border-slate-700/50':
              sticky,
            'border-none': !sticky,
          },
        )}
      >
        <div className="w-full max-w-screen-2xl mx-auto px-4 md:px-6 lg:px-8 xl:px-10 flex items-center gap-x-4">
          <div className="shrink-0 py-4">
            <Logo redirectUrl={logoRedirect ?? '/'} data={logo} />
          </div>
          <div className="flex-1 lg:text-lg">
            {menuItems && <NavMenu menuItems={menuItems} layout={layout} />}
          </div>
          {/* {showModeSelector && <DarkModeToggle />} */}
          {buttons && buttons.length > 0 && (
            <div className="shrink-0 hidden lg:block">
              <ButtonGroup data={buttons} size="sm" />
            </div>
          )}
          {menuItems && (
            <NavMenuMobile menuItems={menuItems} buttons={buttons ?? []} />
          )}
        </div>
      </div>
    </header>
  );
};

const MinimalHeader: React.FC<{ data: NavigationType }> = ({ data }) => {
  const { logo, logoRedirect, buttons, showModeSelector } = data;
  return (
    <header className={classNames('relative z-[999]')}>
      <div
        className={classNames(
          'absolute w-screen flex justify-center dark:text-slate-100 invese:text-slate-100',
        )}
      >
        <div className="container pt-6 flex items-center justify-between flex-1">
          <div className="shrink-0">
            <Logo redirectUrl={logoRedirect ?? '/'} data={logo} />
          </div>
          <div className="flex gap-5 items-center">
            {buttons && buttons.length > 0 && (
              <div className="hidden md:block">
                <ButtonGroup data={buttons} />
              </div>
            )}
            {/* {showModeSelector && <DarkModeToggle />} */}
          </div>
        </div>
      </div>
    </header>
  );
};
