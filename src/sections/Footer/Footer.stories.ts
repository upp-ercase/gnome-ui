import { Meta, StoryObj } from '@storybook/react-vite';
import { Footer } from './Footer';

const meta = {
  title: 'Sections/Footer',
  component: Footer,
  tags: ['autodocs'],
  parameters: {
    layout: 'full',
  },
} satisfies Meta<typeof Footer>;

export default meta;

type Story = StoryObj<typeof Footer>;

export const Default: Story = {
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
      logoRedirect: '/',
      description: '',
      copyright: '© NovaJAM 2025 | All rights reserved.',
      menuItems: [
        {
          label: 'Quick Links',
          menuItems: [
            {
              href: '/about',
              label: 'About',
              openNewTab: false,
              contentType: 'link',
            },
            {
              href: '/gallery',
              label: 'Gallery',
              openNewTab: false,
              contentType: 'link',
            },
            {
              href: '/blog',
              label: 'Blog',
              openNewTab: false,
              contentType: 'link',
            },
            {
              href: '/contact',
              label: 'Contact',
              openNewTab: false,
              contentType: 'link',
            },
          ],
          contentType: 'submenu',
        },
      ],
      backgroundColor: '#f4f9fa',
      backgroundImage: null,
      inverse: false,
    },
  },
};

export const Inverse: Story = {
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
      logoRedirect: '/',
      description: '',
      copyright: '© NovaJAM 2025 | All rights reserved.',
      menuItems: [
        {
          label: 'Quick Links',
          menuItems: [
            {
              href: '/about',
              label: 'About',
              openNewTab: false,
              contentType: 'link',
            },
            {
              href: '/gallery',
              label: 'Gallery',
              openNewTab: false,
              contentType: 'link',
            },
            {
              href: '/blog',
              label: 'Blog',
              openNewTab: false,
              contentType: 'link',
            },
            {
              href: '/contact',
              label: 'Contact',
              openNewTab: false,
              contentType: 'link',
            },
          ],
          contentType: 'submenu',
        },
      ],
      backgroundColor: '#161A1D',
      backgroundImage: null,
      inverse: true,
    },
  },
};
