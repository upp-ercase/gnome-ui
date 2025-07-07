import type { Meta, StoryObj } from '@storybook/react-vite';
import { Statistics } from './Statistics';

const meta = {
  title: 'Blocks/Statistics',
  component: Statistics,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Statistics>;

export default meta;

type Story = StoryObj<typeof Statistics>;

export const Horizontal: Story = {
  args: {
    data: {
      keyNumber: '1M+',
      description:
        'With lots of unique blocks, you can easily build a page without coding. Build your next landing page.',
      alignment: 'start',
      layout: 'horizontal',
    },
  },
};

export const vertical: Story = {
  args: {
    data: {
      keyNumber: '1M+',
      description:
        'With lots of unique blocks, you can easily build a page without coding. Build your next landing page.',
      alignment: 'start',
      layout: 'vertical',
    },
  },
};

export const Center: Story = {
  args: {
    data: {
      keyNumber: '1M+',
      description:
        'With lots of unique blocks, you can easily build a page without coding. Build your next landing page.',
      layout: 'vertical',
      alignment: 'center',
    },
  },
};

export const Color: Story = {
  args: {
    data: {
      keyNumber: '1M+',
      description:
        'With lots of unique blocks, you can easily build a page without coding. Build your next landing page.',
      layout: 'vertical',
      alignment: 'center',
      keyNumberColor: 'indigo',
    },
  },
};
