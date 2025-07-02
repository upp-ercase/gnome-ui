import classNames from 'classnames';
import { AlignmentType } from '../../types';

export const Eyebrow: React.FC<{
  content: string;
  alignment?: AlignmentType;
}> = ({ content, alignment }) => (
  <div
    className={classNames(
      'text-sm xl:text-base tracking-wider font-semibold text-secondary-600 dark:text-secondary-500 inverse:text-secondary-500',
      {
        'text-center': alignment === 'center',
        'text-end': alignment === 'end',
      },
    )}
  >
    {content}
  </div>
);
