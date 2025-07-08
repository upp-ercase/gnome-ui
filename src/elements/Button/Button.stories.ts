import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './Button';

const meta = {
  title: 'Elements/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    label: 'Primary',
    href: '/',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Secondary',
    href: '/',
    variant: 'secondary',
  },
};

export const Neutral: Story = {
  args: {
    label: 'Neutral',
    href: '/',
    variant: 'neutral',
  },
};

export const Ghost: Story = {
  args: {
    label: 'Ghost',
    href: '/',
    variant: 'ghost',
  },
};

export const Outline: Story = {
  args: {
    label: 'Outline',
    href: '/',
    variant: 'outline',
  },
};

export const Link: Story = {
  args: {
    label: 'Link',
    href: '/',
    variant: 'link',
  },
};

export const WithArrow: Story = {
  args: {
    label: 'With Arrow',
    href: '/',
    variant: 'primary',
    withArrow: true,
  },
};

export const WithIcon: Story = {
  args: {
    label: 'With Icon',
    href: '/',
    variant: 'link',
    icon: {
      id: 'phone-icon',
      title: 'Phone Icon',
      description: 'A phone SVG icon',
      width: 20,
      height: 20,
      url: 'https://unpkg.com/heroicons@2.0.16/24/outline/play-circle.svg',
      contentType: 'image/svg',
    },
  },
};

export const WithEyebrow: Story = {
  args: {
    eyebrow: 'Eyebrow',
    label: 'With Eyebrow',
    href: '/',
    variant: 'neutral',
  },
};

export const Large: Story = {
  args: {
    label: 'Large',
    href: '/',
    variant: 'primary',
    size: 'lg',
  },
};

export const Base: Story = {
  args: {
    label: 'Base',
    href: '/',
    variant: 'secondary',
    size: 'base',
  },
};

export const Small: Story = {
  args: {
    label: 'Small',
    href: '/',
    variant: 'neutral',
    size: 'sm',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled',
    href: '/',
    variant: 'outline',
    disabled: true,
  },
};
