import classNames from 'classnames';
import { Button } from '../../elements/Button/Button';
import { PricingPlanType } from '../../types';
import { MarkdownRenderer } from '../../elements/MarkdownRenderer/MarkdownRenderer';
import { IoCheckmarkSharp } from 'react-icons/io5';
import { RxCross2 } from 'react-icons/rx';
import { usePricingOption } from '../../providers/PricingOptionProvider/PricingOptionProvider';
import { getCurrencySymbol } from '../../utils/currency';

const PricingBadge: React.FC<{ badge?: string }> = ({ badge }) => {
  if (!badge) return null;
  return (
    <div className="ml-auto px-2 py-1 rounded-theme text-xs font-medium tracking-wider text-primary-600 bg-primary-100 dark:text-primary-100 dark:bg-primary-600">
      {badge}
    </div>
  );
};

const PricingOptions: React.FC<{
  pricingOptions: PricingPlanType['pricingOptions'];
  billingCycle: string;
}> = ({ pricingOptions, billingCycle }) => {
  return (
    <>
      {pricingOptions.map((item, idx) => (
        <div
          key={idx}
          className={classNames({ hidden: billingCycle !== item.billingCycle })}
        >
          <div className="font-heading text-lg-heading dark:text-slate-100">
            <span
              className={classNames({
                'opacity-30 line-through': item.salePrice,
              })}
            >
              {getCurrencySymbol(item.currency)}
              <span className="font-semibold">{item.standardPrice}</span>
            </span>
            {item.salePrice && (
              <>
                {getCurrencySymbol(item.currency)}
                <span className="font-semibold">{item.salePrice}</span>
              </>
            )}
          </div>
          {item.priceSuffix && (
            <div className="-mt-1 text-sm tracking-wide text-slate-400">
              {item.priceSuffix}
            </div>
          )}
        </div>
      ))}
    </>
  );
};

const PricingFeatures: React.FC<{
  features?: string[];
  planLimitations?: string[];
}> = ({ features, planLimitations }) => {
  if (!features?.length && !planLimitations?.length) return null;

  return (
    <ul className="my-2 lg:my-4 pl-6 flex flex-col gap-1 prose dark:prose-invert">
      {features?.map((feature, idx) => (
        <li key={idx} className="relative list-none">
          <IoCheckmarkSharp
            className="absolute top-1 -left-6 text-green-600 dark:text-green-400"
            size={20}
          />
          {feature}
        </li>
      ))}
      {planLimitations?.map((limitation, idx) => (
        <li key={idx} className="relative list-none opacity-30">
          <RxCross2
            className="absolute top-1 -left-6 text-green-600 dark:text-green-400"
            size={20}
          />
          {limitation}
        </li>
      ))}
    </ul>
  );
};

export const PricingPlan: React.FC<{ data: PricingPlanType }> = ({ data }) => {
  const {
    planName,
    pricingOptions,
    badge,
    description,
    features,
    planLimitations,
    cta,
    featured,
    alignment = 'center',
  } = data;

  const { billingCycle } = usePricingOption();

  return (
    <div
      className={classNames(
        'rounded-theme bg-white dark:bg-slate-800/80 dark:backdrop-blur-xl border',
        {
          'border-slate-100 dark:border-slate-800/80 inverse:border-slate-800/80':
            !featured,
          'border-2 border-primary-600 dark:border-primary-500 inverse:border-primary-500':
            featured,
        },
      )}
    >
      <div
        className={classNames(
          'px-8 lg:px-10 py-8 flex flex-col gap-4 lg:gap-6',
          {
            'text-start items-start': alignment === 'start',
            'text-center items-center': alignment === 'center',
            'text-end items-end': alignment === 'end',
          },
        )}
      >
        <div
          className={classNames('w-full flex gap-4 items-start', {
            'justify-start': alignment === 'start',
            'justify-center': alignment === 'center',
            'justify-end': alignment === 'end',
          })}
        >
          <h4 className="text-base lg:text-lg font-semibold text-primary-600 dark:text-primary-500">
            {planName}
          </h4>
          {badge && <PricingBadge badge={badge} />}
        </div>

        <PricingOptions
          pricingOptions={pricingOptions}
          billingCycle={billingCycle}
        />

        {description && (
          <div className="prose text-slate-600 dark:prose-invert dark:text-slate-100/80">
            <MarkdownRenderer>{description}</MarkdownRenderer>
          </div>
        )}

        <div
          role="separator"
          className="mt-4 w-full border-t border-slate-200/80 dark:border-slate-700/80 inverse:border-slate-700/80"
        />

        {cta && (
          <Button className="mt-2" {...cta} size="lg" fullWidth>
            {cta.label}
          </Button>
        )}

        <PricingFeatures
          features={features}
          planLimitations={planLimitations}
        />
      </div>
    </div>
  );
};
