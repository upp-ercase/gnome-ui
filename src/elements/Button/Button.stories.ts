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
    data: {
      label: 'Primary',
      href: '/',
      variant: 'primary',
    },
  },
};

export const Secondary: Story = {
  args: {
    data: {
      label: 'Secondary',
      href: '/',
      variant: 'secondary',
    },
  },
};

export const Neutral: Story = {
  args: {
    data: {
      label: 'Neutral',
      href: '/',
      variant: 'neutral',
    },
  },
};

export const Ghost: Story = {
  args: {
    data: {
      label: 'Ghost',
      href: '/',
      variant: 'ghost',
    },
  },
};

export const Outline: Story = {
  args: {
    data: {
      label: 'Outline',
      href: '/',
      variant: 'outline',
    },
  },
};

export const Link: Story = {
  args: {
    data: {
      label: 'Link',
      href: '/',
      variant: 'link',
    },
  },
};

export const WithArrow: Story = {
  args: {
    data: {
      label: 'With Arrow',
      href: '/',
      variant: 'primary',
      withArrow: true,
    },
  },
};

export const WithIcon: Story = {
  args: {
    data: {
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
  },
};

export const WithEyebrow: Story = {
  args: {
    data: {
      eyebrow: 'Eyebrow',
      label: 'With Eyebrow',
      href: '/',
      variant: 'neutral',
    },
  },
};

export const Large: Story = {
  args: {
    data: {
      label: 'Large',
      href: '/',
      variant: 'primary',
    },
    size: 'lg',
  },
};

export const Base: Story = {
  args: {
    data: {
      label: 'Base',
      href: '/',
      variant: 'secondary',
    },
    size: 'base',
  },
};

export const Small: Story = {
  args: {
    data: {
      label: 'Small',
      href: '/',
      variant: 'neutral',
    },
    size: 'sm',
  },
};

export const Disabled: Story = {
  args: {
    data: {
      label: 'Disabled',
      href: '/',
      variant: 'outline',
    },
    disabled: true,
  },
};
