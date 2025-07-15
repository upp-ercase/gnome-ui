import classNames from 'classnames';
import { RichContentType } from '../../types';
import { ButtonGroup } from '../../elements/ButtonGroup/ButtonGroup';
import { Eyebrow } from '../../elements/Eyebrow/Eyebrow';
import { Title } from '../../elements/Title/Title';
import { Body } from '../../elements/Body/Body';
import { getSpacingClasses } from '../../utils';

export const RichContent: React.FC<{
  data: RichContentType;
}> = ({ data }) => {
  const {
    eyebrow,
    title,
    body,
    ctas,
    titleFontSize,
    alignment,
    paddingTop,
    paddingLeft,
    paddingBottom,
    paddingRight,
    layout,
    backgroundColor,
  } = {
    ...data,
    titleFontSize: data.titleFontSize ?? 'base',
    layout: data.layout ?? 'stacked',
    alignment: data.alignment ?? 'center',
  };

  // Extracted function to get background styles
  const getBackgroundStyle = () => {
    if (!backgroundColor) return {};
    return {
      backgroundColor: backgroundColor
        ? `rgba(${parseInt(backgroundColor.slice(1, 3), 16)}, 
                ${parseInt(backgroundColor.slice(3, 5), 16)}, 
                ${parseInt(backgroundColor.slice(5, 7), 16)}, 
                var(--tw-bg-opacity))`
        : 'none',
    };
  };

  // Reusable Render Functions
  const renderEyebrow = () => eyebrow && <Eyebrow content={eyebrow} />;
  const renderTitle = () =>
    title && <Title content={title} titleFontSize={titleFontSize} />;
  const renderBody = () => body && <Body content={body} />;
  const renderCTAs = () =>
    !!ctas?.length && (
      <ButtonGroup
        className={classNames({
          'mt-2 lg:mt-3': body,
        })}
        data={ctas}
        alignment={alignment}
        size="lg"
      />
    );

  // Layout-Specific Content
  const renderContent = () => {
    switch (layout) {
      case 'cta-side':
        return (
          <>
            <div
              className={classNames('flex-grow flex flex-col gap-6', {
                'text-center': alignment === 'center',
                'text-end': alignment === 'end',
              })}
            >
              {renderEyebrow()}
              {renderTitle()}
              {renderBody()}
            </div>
            {!!ctas?.length && (
              <ButtonGroup data={ctas} alignment="end" size="lg" />
            )}
          </>
        );
      case 'body-cta-side':
        return (
          <>
            <div className="flex-1 flex flex-col gap-6 self-start">
              {renderEyebrow()}
              {renderTitle()}
            </div>
            <div
              className={classNames('flex-1 flex flex-col gap-6', {
                'items-center text-center': alignment === 'center',
                'items-end text-end': alignment === 'end',
              })}
            >
              {renderBody()}
              {renderCTAs()}
            </div>
          </>
        );
      default: // 'stacked'
        return (
          <>
            {renderEyebrow()}
            {renderTitle()}
            {renderBody()}
            {renderCTAs()}
          </>
        );
    }
  };

  return (
    <div
      className={classNames(
        'rounded-theme',
        getSpacingClasses('pt', paddingTop ?? 'none'),
        getSpacingClasses('pb', paddingBottom ?? 'none'),
        getSpacingClasses('pl', paddingLeft ?? 'none'),
        getSpacingClasses('pr', paddingRight ?? 'none'),
        {
          'dark:bg-opacity-10': backgroundColor,
          'max-w-4xl flex flex-col gap-6': layout === 'stacked',
          'items-center text-center justify-self-center mx-auto':
            alignment === 'center' && layout === 'stacked',
          'items-end text-end justify-self-end':
            alignment === 'end' && layout === 'stacked',
          'flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-15':
            layout !== 'stacked',
        },
      )}
      style={getBackgroundStyle()}
    >
      {renderContent()}
    </div>
  );
};
