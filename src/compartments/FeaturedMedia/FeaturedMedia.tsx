import classNames from 'classnames';
import { FeaturedMediaType } from '../../types';
import { MediaItem } from '../../elements/MediaItem/MediaItem';

export const FeaturedMedia: React.FC<{ data: FeaturedMediaType }> = function ({
  data,
}) {
  const { file, priority } = data;
  return (
    <div className={classNames('w-full')}>
      {file && <MediaItem data={file} priority={priority} />}
    </div>
  );
};
