import type { Meta, StoryObj, StoryFn } from '@storybook/react-vite';
import { PricingPlan } from './PricingPlan';
import { PricingOptionProvider } from '../../providers/PricingOptionProvider/PricingOptionProvider';
import { PricingPlanType } from '../../types';

const meta = {
  title: 'Blocks/PricingPlan',
  component: PricingPlan,

  decorators: [
    (Story) => (
      <PricingOptionProvider initialBillingCycle="One-Time">
        <div className="max-w-md">
          <Story />
        </div>
      </PricingOptionProvider>
    ),
  ],
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof PricingPlan>;

export default meta;

type Story = StoryObj<typeof PricingPlan>;

const mockPricingPlan = {
  planName: 'STANDARD',
  pricingOptions: [
    {
      billingCycle: 'One-Time',
      standardPrice: 49,
      salePrice: null,
      currency: 'USD',
      priceSuffix: 'billed monthly',
    },
  ],
  badge: null,
  description:
    'With lots of unique blocks, you can easily build a page without coding.',
  features: [
    'Commercial License',
    '100+ HTML UI Elements',
    '01 Domain Support',
    '6 Month Premium Support',
  ],
  planLimitations: ['Lifetime Updates'],
  alignment: 'start',
  cta: {
    label: 'Start Free Trial',
    href: '#',
    variant: 'primary',
  },
  featured: false,
  contentType: 'pricingplan',
} as PricingPlanType;

export const Default: Story = {
  args: {
    data: mockPricingPlan,
  },
};

export const Center: Story = {
  args: {
    data: {
      ...mockPricingPlan,
      alignment: 'center',
    },
  },
};

export const End: Story = {
  args: {
    data: {
      ...mockPricingPlan,
      alignment: 'end',
    },
  },
};

export const Sale: Story = {
  args: {
    data: {
      ...mockPricingPlan,
      pricingOptions: [
        {
          billingCycle: 'One-Time',
          standardPrice: 49,
          salePrice: 39,
          currency: 'USD',
          priceSuffix: 'billed monthly',
        },
      ],
    },
  },
};

export const WithBadge: Story = {
  args: {
    data: {
      ...mockPricingPlan,
      badge: 'MOST POPULAR',
    },
  },
};

export const Featured: Story = {
  args: {
    data: {
      ...mockPricingPlan,
      badge: 'MOST POPULAR',
      featured: true,
    },
  },
};
