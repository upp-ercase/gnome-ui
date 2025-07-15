'use client';
import { useState, useEffect } from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { BlockType, ContentListType, GapType } from '../../types';
import { ContentMapping } from '../../blocks/ContentMapping/ContentMapping';

export const MasonryList: React.FC<{
  contentItems: BlockType[];
  columns: ContentListType['columns'];
  gap?: GapType;
}> = ({ contentItems, columns, gap = 'base' }) => {
  // ResponsiveMasonry uses window.innerWidth to calculate the number of columns, which is not available on the server side so it does not work on server side rendering

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <Masonry className="w-full" columnsCount={columns ?? 1} gutter="30px">
        {contentItems.map((item, idx) => (
          <ContentMapping
            key={idx}
            index={idx}
            data={item}
            itemsPerRow={columns ?? 1}
          />
        ))}
      </Masonry>
    );
  }

  const columnBreakpointsBySettings = {
    320: { 6: 2, 5: 2, 4: 1, 3: 1, 2: 1, 1: 1 },
    640: { 6: 3, 5: 3, 4: 2, 3: 1, 2: 1, 1: 1 },
    768: { 6: 4, 5: 4, 4: 2, 3: 2, 2: 1, 1: 1 },
    1024: { 6: 5, 5: 4, 4: 3, 3: 2, 2: 2, 1: 1 },
    1280: { 6: 6, 5: 5, 4: 4, 3: 3, 2: 2, 1: 1 },
  };

  const gutterBreakPointsBySettings = {
    320: { xs: '8px', sm: '16px', base: '24px', lg: '40px', xl: '64px' },
    768: { xs: '10px', sm: '20px', base: '30px', lg: '48px', xl: '80px' },
    1024: { xs: '12px', sm: '24px', base: '36px', lg: '60px', xl: '96px' },
  };

  const columnsCountBreakPoints = Object.fromEntries(
    Object.entries(columnBreakpointsBySettings).map(([breakpoint, mapping]) => [
      Number(breakpoint),
      columns ? mapping[columns] : 1,
    ]),
  );

  const gutterBreakPoints = Object.fromEntries(
    Object.entries(gutterBreakPointsBySettings).map(([breakpoint, mapping]) => [
      Number(breakpoint),
      gap && gap in mapping ? mapping[gap as keyof typeof mapping] : '0px',
    ]),
  );

  return (
    <ResponsiveMasonry
      className="w-full"
      columnsCountBreakPoints={columnsCountBreakPoints}
      gutterBreakPoints={gutterBreakPoints}
    >
      <Masonry>
        {contentItems.map((item, idx) => (
          <ContentMapping
            key={idx}
            index={idx}
            data={item}
            itemsPerRow={columns ?? 1}
          />
        ))}
      </Masonry>
    </ResponsiveMasonry>
  );
};
