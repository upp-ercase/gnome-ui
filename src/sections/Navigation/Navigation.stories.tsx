import { Meta, StoryObj } from '@storybook/react-vite';
import { Navigation } from './Navigation';

const meta = {
	title: 'Sections/Navigation',
	component: Navigation,
	tags: ['autodocs'],
	parameters: {
		layout: 'full',
	},
} satisfies Meta<typeof Navigation>;

export default meta;

type Story = StoryObj<typeof Navigation>;

export const Default: Story = {
	decorators: [
		Story => (
			<div className='bg-slate-100 w-full h-[2000px]'>
				<Story />
			</div>
		)
	],
	args: {
		data: {
			url: '/',
			logo: {
				url: 'https://images.ctfassets.net/ehmycbmc25mu/7vvCItsTwfA8tl0SyqlzWT/138533e575dc63a59fa302011502ac6e/novajam_logo_black__1_.webp',
				title: '',
				description: '',
				width: 1055,
				height: 160,
			},
			logoRedirect: "/",
			menuItems: [
				{
					href: "/",
					label: "Home",
					openNewTab: false,
					contentType: 'link',
				},
				{
					href: "/about",
					label: "About",
					openNewTab: false,
					contentType: 'link',
				},
				{
					href: "/gallery",
					label: "Gallery",
					openNewTab: false,
					contentType: 'link',
				},
				{
					href: "/blog",
					label: "Blog",
					openNewTab: false,
					contentType: 'link',
				},
				{
					href: "/contact",
					label: "Contact",
					openNewTab: false,
					contentType: 'link',
				},
			],
			inverse: false,
			layout: 'standard',
			buttons: [
				{
					label: 'Get started',
					href: '/contact',
					withArrow: true,
					variant: 'primary',
				}
			],
			hotButtons: [],
			showModeSelector: false,
		}
	}
}

export const Inverse: Story = {
	decorators: [
		Story => (
			<div className='bg-slate-900 w-full h-[2000px]'>
				<Story />
			</div>
		)
	],
	args: {
		data: {
			url: '/',
			logo: {
				url: 'https://images.ctfassets.net/ehmycbmc25mu/7vvCItsTwfA8tl0SyqlzWT/138533e575dc63a59fa302011502ac6e/novajam_logo_black__1_.webp',
				title: '',
				description: '',
				width: 1055,
				height: 160,
			},
			logoRedirect: "/",
			menuItems: [
				{
					href: "/",
					label: "Home",
					openNewTab: false,
					contentType: 'link',
				},
				{
					href: "/about",
					label: "About",
					openNewTab: false,
					contentType: 'link',
				},
				{
					href: "/gallery",
					label: "Gallery",
					openNewTab: false,
					contentType: 'link',
				},
				{
					href: "/blog",
					label: "Blog",
					openNewTab: false,
					contentType: 'link',
				},
				{
					href: "/contact",
					label: "Contact",
					openNewTab: false,
					contentType: 'link',
				},
			],
			inverse: true,
			layout: 'standard',
			buttons: [
				{
					label: 'Get started',
					href: '/contact',
					withArrow: true,
					variant: 'primary',
				}
			],
			hotButtons: [],
			showModeSelector: false,
		}
	}
}