import { Meta, StoryObj } from '@storybook/react-vite';
import { Eyebrow } from './Eyebrow';

const meta = {
  title: 'Elements/Eyebrow',
  component: Eyebrow,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Eyebrow>;

export default meta;

type Story = StoryObj<typeof Eyebrow>;

export const Default: Story = {
  args: {
    content: 'WEB COMPONENTS',
  },
};
