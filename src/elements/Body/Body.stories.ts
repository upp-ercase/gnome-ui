import { Meta, StoryObj } from '@storybook/react-vite';
import { Body } from './Body';

const meta = {
  title: 'Elements/Body',
  component: Body,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Body>;

export default meta;

type Story = StoryObj<typeof Body>;

export const Default: Story = {
  args: {
    content:
      '## __Reasons you should choose us to grow today.__\n\nWith lots of unique blocks, you can easily build a page without coding. Build your next landing page.\n\n- __Fully Responsive__\n- __Beautiful Layouts__\n- __Easy to Edit__\n- __Google Font included__',
  },
};
