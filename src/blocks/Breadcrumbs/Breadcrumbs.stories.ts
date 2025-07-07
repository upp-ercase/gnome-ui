import type { Meta, StoryObj } from '@storybook/react-vite';
import { Breadcrumbs } from './Breadcrumbs';

const meta = {
  title: 'Blocks/Breadcrumbs',
  component: Breadcrumbs,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Breadcrumbs>;

export default meta;

type Story = StoryObj<typeof Breadcrumbs>;

const baseBreadcrumbs = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Blog',
    href: '/blog',
  },
  {
    label: 'Guide',
    href: '/blog/category/guide',
  },
];

export const Default: Story = {
  args: {
    paths: baseBreadcrumbs,
  },
};
