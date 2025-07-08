import { ContentListType, PricingPlanType } from '../../types';
import { CarouselList } from '../../blocks/CarouselList/CarouselList';
import { MasonryList } from '../../blocks/MasonryList/MasonryList';
import { GridList } from '../../blocks/GridList/GridList';
import { FlexList } from '../../blocks/FlexList/FlexList';
import { ButtonGroup } from '../../elements/ButtonGroup/ButtonGroup';
import { PricingSwitcher } from '../../elements/PricingSwitcher/PricingSwitcher';
import { PricingOptionProvider } from '../../providers/PricingOptionProvider/PricingOptionProvider';

const LayoutRenderer: React.FC<{
  layout: ContentListType['layout'];
  contentItems: ContentListType['contentItems'];
  columns: ContentListType['columns'];
  gap: ContentListType['gap'];
}> = ({ layout, contentItems, columns, gap }) => {
  const layouts = {
    carousel: CarouselList,
    masonry: MasonryList,
    grid: GridList,
    flex: FlexList,
  };

  const SelectedLayout = layout ? layouts[layout] : GridList;

  return (
    <SelectedLayout
      contentItems={contentItems}
      columns={columns ?? 3}
      gap={gap}
    />
  );
};

const isPricingPlanType = (
  contentItem: unknown,
): contentItem is PricingPlanType =>
  (contentItem as PricingPlanType)?.contentType === 'pricingplan' &&
  Array.isArray((contentItem as PricingPlanType)?.pricingOptions);

const CTAButtons: React.FC<{ ctas?: any[] }> = ({ ctas }) =>
  ctas?.length ? (
    <ButtonGroup
      className="mt-10 lg:mt-12"
      data={ctas}
      size="lg"
      alignment="center"
    />
  ) : null;
export const ContentList: React.FC<{ data: ContentListType }> = ({ data }) => {
  const { contentItems, layout, columns, gap, ctas } = data;
  const isPricingPlan = contentItems.every(isPricingPlanType);

  const contentLayout = (
    <>
      <LayoutRenderer
        layout={layout}
        contentItems={contentItems}
        columns={columns}
        gap={gap}
      />
      <CTAButtons ctas={ctas} />
    </>
  );

  if (isPricingPlan) {
    const initialBillingCycle =
      contentItems[0]?.pricingOptions[0]?.billingCycle;

    return (
      <PricingOptionProvider initialBillingCycle={initialBillingCycle}>
        <PricingSwitcher plans={contentItems as PricingPlanType[]} />
        <LayoutRenderer
          layout={layout}
          contentItems={contentItems}
          columns={columns}
          gap={gap}
        />
        <CTAButtons ctas={ctas} />
      </PricingOptionProvider>
    );
  }

  return contentLayout;
};
