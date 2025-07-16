import type { Meta, StoryObj, StoryFn } from '@storybook/react-vite';
import { PricingPlan } from './PricingPlan';
import { PricingOptionProvider } from '../../providers/PricingOptionProvider/PricingOptionProvider';

const meta = {
	title: 'Blocks/PricingPlan',
	component: PricingPlan,
	decorators: [
		(Story) => (
			<PricingOptionProvider initialBillingCycle='One-Time'>
				<Story />
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

export const Default: Story = {
	args: {
		data: {
			planName: 'STANDARD',
			pricingOptions: [
				{
					billingCycle: 'One-Time',
					standardPrice: 49,
					salePrice: null,
					currency: 'USD',
					priceSuffix: 'billed monthly',
				}
			],
			badge: 'MOST POPULAR',
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
			featured: true,
			contentType: 'pricingplan',
		},
	},
};

export const Center: Story = {
	args: {
		data: {
			planName: 'STANDARD',
			pricingOptions: [
				{
					billingCycle: 'One-Time',
					standardPrice: 49,
					salePrice: null,
					currency: 'USD',
					priceSuffix: 'billed monthly',
				}
			],
			badge: 'MOST POPULAR',
			description:
				'With lots of unique blocks, you can easily build a page without coding.',
			features: [
				'Commercial License',
				'100+ HTML UI Elements',
				'01 Domain Support',
				'6 Month Premium Support',
			],
			planLimitations: ['Lifetime Updates'],
			alignment: 'center',
			cta: {
				label: 'Start Free Trial',
				href: '#',
				variant: 'primary',
			},
			featured: true,
			contentType: 'pricingplan',
		},
	},
};

export const End: Story = {
	args: {
		data: {
			planName: 'STANDARD',
			pricingOptions: [
				{
					billingCycle: 'One-Time',
					standardPrice: 49,
					salePrice: null,
					currency: 'USD',
					priceSuffix: 'billed monthly',
				}
			],
			badge: 'MOST POPULAR',
			description:
				'With lots of unique blocks, you can easily build a page without coding.',
			features: [
				'Commercial License',
				'100+ HTML UI Elements',
				'01 Domain Support',
				'6 Month Premium Support',
			],
			planLimitations: ['Lifetime Updates'],
			alignment: 'end',
			cta: {
				label: 'Start Free Trial',
				href: '#',
				variant: 'primary',
			},
			featured: true,
			contentType: 'pricingplan',
		},
	},
};

export const Sale: Story = {
	args: {
		data: {
			planName: 'STANDARD',
			pricingOptions: [
				{
					billingCycle: 'One-Time',
					standardPrice: 49,
					salePrice: 39,
					currency: 'USD',
					priceSuffix: 'billed monthly',
				}
			],
			badge: 'MOST POPULAR',
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
			featured: true,
			contentType: 'pricingplan',
		},
	},
};
