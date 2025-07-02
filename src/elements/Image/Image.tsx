'use client';
import classNames from 'classnames';
import { useState } from 'react';
import { MediaAspectRatioType, MediaType } from '../../types';

export const Image: React.FC<{
  data: MediaType | null;
  alt?: string;
  aspectRatio?: MediaAspectRatioType;
  dimensionBase?: 'width' | 'height';
  priority?: boolean;
  rounded?: 'theme' | 'full' | 'none';
  zoomInOverHover?: boolean;
  className?: string;
  fallbackSrc?: string;
}> = ({
  data,
  alt,
  aspectRatio = 'auto',
  dimensionBase = 'width',
  priority = false,
  rounded = 'theme',
  zoomInOverHover = false,
  className,
  fallbackSrc = '/fallback.png',
}) => {
  const [mediaSrc, setMediaSrc] = useState(data?.url ?? fallbackSrc);
  const handleError = () => setMediaSrc(fallbackSrc);

  const aspectRatioClass = getAspectRatioClass(aspectRatio);
  const classes = getClassNames({
    aspectRatioClass,
    dimensionBase,
    width: data?.width,
    zoomInOverHover,
    rounded,
    className,
  });

  if (!data) {
    return (
      <img
        className={classes}
        src={fallbackSrc}
        width={500}
        height={500}
        alt={alt ?? 'No image'}
        fetchPriority={priority ? 'high' : 'auto'}
      />
    )
  }

  const { width, height, title } = data;

  if (shouldRenderImgTag({ width, height })) {
    return (
      <img
        className={classes}
        src={mediaSrc}
        alt={alt ?? title ?? ''}
        width={width ? width : undefined}
        height={height ? height : undefined}
        onError={handleError}
      />
    );
  }

  return (
    <img
      className={classes}
      src={mediaSrc}
      alt={alt ?? title ?? ''}
      width={width}
      height={height}
      onError={handleError}
      fetchPriority={priority ? 'high' : 'auto'}
    />
  );
};

const getAspectRatioClass = (aspectRatio: MediaAspectRatioType) =>
  classNames({
    'aspect-square': aspectRatio === 'square',
    'aspect-video': aspectRatio === '16/9',
    'aspect-4/3': aspectRatio === '4/3',
    'aspect-3/2': aspectRatio === '3/2',
    'aspect-3/4': aspectRatio === '3/4',
  });

const getClassNames = ({
  aspectRatioClass,
  dimensionBase,
  width,
  zoomInOverHover,
  rounded,
  className,
}: {
  aspectRatioClass: string;
  dimensionBase: 'width' | 'height';
  width?: number;
  zoomInOverHover: boolean;
  rounded: 'theme' | 'full' | 'none';
  className?: string;
}) =>
  classNames(
    'not-prose',
    aspectRatioClass,
    {
      'w-full': dimensionBase === 'width' && width && width >= 200,
      'h-full': dimensionBase === 'height' && width && width >= 200,
      'object-cover': width && width >= 200,
      'object-contain': width && width < 200,
      'group-hover:scale-110 hover:scale-110 transition-all duration-500':
        width && width >= 200 && zoomInOverHover,
      [`rounded-${rounded}`]: width && width >= 200,
    },
    className,
  );

const shouldRenderImgTag = ({
  width,
  height,
}: {
  width?: number;
  height?: number;
}) => !width || !height;
