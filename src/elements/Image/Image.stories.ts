import { Meta, StoryObj } from '@storybook/react-vite';
import { Image } from './Image';

const meta = {
  title: 'Elements/Image',
  component: Image,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Image>;

export default meta;

type Story = StoryObj<typeof Image>;

const image = {
  url: 'https://images.unsplash.com/photo-1606474226448-4aa808468efc?q=100&w=300&h=200&auto=format&fit=crop',
  title: 'Hiking',
  description: '',
  width: 300,
  height: 200,
};

export const AspectRatioAuto: Story = {
  args: {
    data: image,
    aspectRatio: 'auto',
  },
};

export const AspectRatioSquare: Story = {
  args: {
    data: image,
    aspectRatio: 'square',
  },
};

export const AspectRatio16x9: Story = {
  args: {
    data: image,
    aspectRatio: '16/9',
  },
};

export const AspectRatio4x3: Story = {
  args: {
    data: image,
    aspectRatio: '4/3',
  },
};

export const AspectRatio3x2: Story = {
  args: {
    data: image,
    aspectRatio: '3/2',
  },
};

export const RoundedFull: Story = {
  args: {
    data: image,
    aspectRatio: 'square',
    rounded: 'full',
  },
};

export const ZoomInOverHover: Story = {
  args: {
    data: image,
    aspectRatio: 'auto',
    zoomInOverHover: true,
  },
};
