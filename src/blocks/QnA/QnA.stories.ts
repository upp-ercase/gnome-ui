import type { Meta, StoryObj } from '@storybook/react-vite';
import { QnA } from './QnA';

const meta = {
  title: 'Blocks/QnA',
  component: QnA,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof QnA>;

export default meta;

type Story = StoryObj<typeof QnA>;

export const isCollapsed: Story = {
  args: {
    data: {
        title: 'What is your name?',
        body:
          'With lots of unique blocks, you can easily build a page without coding. Build your next landing page.',
        isCollapsed: true,
    },
  },
};

export const IsNotCollapsed: Story = {
  args: {
    data: {
        title: 'What is your name?',
        body:
          'With lots of unique blocks, you can easily build a page without coding. Build your next landing page.',
        isCollapsed: false,

    },
  },
}