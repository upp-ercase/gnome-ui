import classNames from 'classnames';
import { ExpertType } from '../../types';
import { Image } from '../../elements/Image/Image';

export const Expert: React.FC<{
  data: ExpertType;
}> = ({ data }) => {
  const {
    name,
    profilePicture,
    role,
    specialization,
    organization,
    description,
  } = data;
  const alignment = data.alignment ?? 'center';

  return (
    <div className={classNames('group rounded-theme py-2')}>
      <div
        className={classNames('relative flex', {
          'justify-center': alignment === 'center',
          'justify-end': alignment === 'end',
        })}
      >
        <Image data={profilePicture} aspectRatio="square" />
        {description && (
          <div
            className={classNames(
              'absolute bottom-0 opacity-0 group-hover:opacity-90 transition-opacity duration-500 ease-in-out rounded-b-theme gr p-4 text-slate-100 bg-primary-600 prose',
            )}
          >
            <div className="line-clamp-5">{description}</div>
          </div>
        )}
      </div>
      <div
        className={classNames(
          'w-full px-4 pt-3 pb-6 flex flex-col rounded-b-theme',
          {
            'text-center': alignment === 'center',
            'text-end': alignment === 'end',
          },
        )}
      >
        <div
          className={classNames(
            'font-heading font-semibold text-xl dark:text-slate-100 inverse:text-slate-100',
          )}
        >
          {name}
        </div>
        {role && (
          <div
            className={classNames(
              'mt-1 text-slate-600 dark:text-slate-100/80 inverse:text-slate-100/80',
            )}
          >
            {role}
          </div>
        )}
        {organization && (
          <div
            className={classNames(
              'text-slate-600 dark:text-slate-100/80 inverse:text-slate-100/80',
            )}
          >
            {organization}
          </div>
        )}
        {specialization && (
          <div
            className={classNames(
              'mt-2 flex flex-wrap gap-2 text-slate-600 dark:text-slate-100/80 inverse:text-slate-100/80',
              {
                'justify-center': alignment === 'center',
                'justify-end': alignment === 'end',
              },
            )}
          >
            {specialization.map((item, index) => (
              <span key={index} className="uppercase text-xs">
                {item}
                {index < specialization.length - 1 && ','}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
